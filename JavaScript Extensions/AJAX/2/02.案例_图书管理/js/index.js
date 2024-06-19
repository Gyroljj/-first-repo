const creator = "李思思11"; // 给自己的数据起别名
/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const list = document.querySelector(".list");
// 1. 封装一个函数,用来渲染页面
const render = () => {
  // 1.1 发送请求获取数据
  axios({
    url: "http://hmajax.itheima.net/api/books",
    method: "GET",
    params: { creator },
  }).then(({ data: { data } }) => {
    // console.log(res)
    // const { data } = res.data
    // const { data: { data } } = res
    // console.log(data)
    // 1.2 渲染页面 map + join
    list.innerHTML = data
      .map((item, index) => {
        // console.log(item)
        const { bookname, author, publisher, id } = item;
        return `
        <tr>
          <td>${index + 1}</td>
          <td>${bookname}</td>
          <td>${author}</td>
          <td>${publisher}</td>
          <td data-id=${id}>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
          </td>
        </tr>`;
      })
      .join("");
  });
};
// 首次加载页面
render();
/**
 * 目标2: 新增图书
 *  2.1 点击添加按钮  弹出模态框  => 属性控制, 没有额外操作
 *  2.2 点击保存 获取数据发起请求 => js控制,存在额外操作
 *  2.3 如果新增成功了,就刷新页面重新渲染
 */
// 2.1 点击添加按钮  弹出模态框  => 属性控制,没有额外操作 √
// 2.2 点击 保存 获取数据发起请求 => js控制,存在额外操作
const addBtn = document.querySelector(".add-btn");
const addForm = document.querySelector(".add-form");
const addModalDom = document.querySelector(".add-modal");
const addModal = new bootstrap.Modal(addModalDom);
addBtn.addEventListener("click", (e) => {
  // 获取数据 => serialize => 查看接口文档,后端需要什么数据类型
  // Body 参数 (application/json) 服务端需要 请求体传参并且需要的是json格式数据
  // 但是 axios 会将 对象自动转换为json,所以我们只需要给data传对象就行
  // 1) 获取数据
  const data = serialize(addForm, { hash: true, empty: true });
  // console.log(data)
  // 2) 判断数据是否为空
  if (!data.author || !data.bookname || !data.publisher) {
    return alert("不能为空");
  }
  // 3) 根据数据发起请求
  axios({
    url: "http://hmajax.itheima.net/api/books",
    method: "POST",
    data: {
      creator,
      ...data,
    },
  }).then((res) => {
    // 4) 添加成功后, 关闭弹框 渲染页面 清空表单
    // console.log(res)
    // 关闭弹框
    addModal.hide();
    // 重新渲染页面
    render();
    // 清空表单
    addForm.reset();
  });
});
/**
 * 目标3. 删除图书
 *  3.1 给删除按钮绑定事件  => 事件委托 =>删除按钮是后追加的元素,所以不能直接获取,需要给父级添加事件委托
 *  3.2 获取当前数据的id值
 *  3.3 根据接口要求发送请求,删除数据
 *  3.4 重新渲染页面
 */
//  3.1 给删除按钮绑定事件  => 事件委托 => 删除按钮是后追加的元素,所以不能直接获取, 需要给父级添加事件委托
// list.classList.contains()
list.addEventListener("click", (e) => {
  const {
    target,
    target: {
      parentNode: { dataset },
    },
  } = e;
  if (target.classList.contains("del")) {
    // const { parentNode: { dataset } } = target
    // 3.2 获取当前数据的id值
    console.log(dataset.id);
    // 3.3 发请求,删数据
    axios({
      // path参数叫做 路径参数,就将参数写在 url 后面
      url: `http://hmajax.itheima.net/api/books/${dataset.id}`,
      method: "DELETE",
    }).then((res) => {
      alert(res.data.message);
      // 重新渲染页面
      render();
    });
  }
});
/**
 * 目标4: 编辑图书
 *  4.1 点击编辑按钮 显示模态框 => js 控制点击后执行其他的逻辑
 *  4.2 显示模态框后, 根据这个id 获取图书详情
 *  4.3 回显数据 => 回显到模态框中
 *  4.4 点击编辑的修改按钮 将最新的数据发送给服务器,修改数据
 *  4.5 重新渲染页面
 */
const editModal = new bootstrap.Modal(document.querySelector(".edit-modal"));
const editForm = document.querySelector(".edit-form");
// 4.1 点击编辑按钮 显示模态框 => js 控制点击后执行其他的逻辑
list.addEventListener("click", (e) => {
  // 判断是不是点击了编辑
  if (e.target.classList.contains("edit")) {
    // 获取id console.log(e.target.parentNode.dataset.id)
    const id = e.target.parentNode.dataset.id;
    //  4.2 显示模态框后, 根据这个id 获取图书详情
    editModal.show();
    axios({
      url: `http://hmajax.itheima.net/api/books/${id}`,
      method: "GET",
    }).then((res) => {
      // console.log(res)
      const { data } = res.data;
      // editForm.querySelector('[name=bookname]').value = data.bookname
      // editForm.querySelector('[name=author]').value = data.author
      // editForm.querySelector('[name=publisher]').value = data.publisher
      /* 4.3 回显数据 => 回显到模态框中
        => 因为 页面中input的 name 属性值和获取到的数据的键一致,
        所以可以循环遍历赋值 */
      // const arr = Object.keys(data)
      // console.log(arr) // ['id', 'bookname', 'author', 'publisher']
      Object.keys(data).forEach((item) => {
        // console.log(item, data[item])
        editForm.querySelector(`[name=${item}]`).value = data[item];
      });
    });
  }
});
// 4.4 点击编辑的 修改按钮 将最新的数据发送给服务器,修改数据
document.querySelector(".edit-btn").addEventListener("click", (e) => {
  // 1) 获取表单数据
  const data = serialize(editForm, { hash: true, empty: true });
  console.log(data);
  // 2) 通过ajax发送数据给服务器做修改
  axios({
    url: `http://hmajax.itheima.net/api/books/${data.id}`,
    method: "PUT",
    data: {
      creator,
      ...data,
    },
  }).then((res) => {
    // console.log(res)
    // 4.5 重新渲染页面
    // 关闭弹框
    editModal.hide();
    // 渲染页面
    render();
    // 清空表单
    editForm.reset();
  });
});
