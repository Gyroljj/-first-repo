/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */
const creator = "李建军";
const userForm = document.querySelector(".user-form");
// 1.1 获取用户的数据
const render = () => {
  // 1. 获取数据
  axios({
    url: "http://hmajax.itheima.net/api/settings",
    method: "GET",
    params: { creator },
  }).then((res) => {
    const { data } = res.data;
    // console.log(data)
    // 2. 回显页面
    Object.keys(data).forEach((item) => {
      // console.log(item)
      if (item === "avatar") {
        document.querySelector(".prew").src = data[item];
      } else if (item === "gender") {
        // document.querySelector(`[name=gender][value="${data[item]}"]`).checked = true
        const genders = document.querySelectorAll("[name=gender]");
        // console.log(genders, data[item])
        const index = data[item];
        genders[index].checked = true;
      } else {
        userForm.querySelector(`[name="${item}"]`).value = data[item];
      }
    });
  });
};
render();

/**
 * 目标2: 图像更换
 *  2.1 点击按钮 选择图片
 *  2.2 axios 上传图片
 *  2.3 回显图片
 */
document.querySelector(".upload").addEventListener("change", (e) => {
  // 获取图片
  // console.log(e.target.files[0])
  const fd = new FormData();
  fd.append("avatar", e.target.files[0]);
  fd.append("creator", creator);
  axios({
    url: "http://hmajax.itheima.net/api/avatar",
    method: "PUT",
    data: fd,
  }).then((res) => {
    // console.log(res)
    toastObj.show();
    document.querySelector(".info-box").innerHTML = res.data.message;
    document.querySelector(".prew").src = res.data.data.avatar;
  });
});
/**
 * 目标3: 修改数据并提交
 *  3.1 点击提交按钮,获取全部数据
 *  3.2 修改数据
 *  3.3 提交数据
 *  3.4 回显数据
 */
const myToast = document.querySelector(".my-toast");
const toastObj = new bootstrap.Toast(myToast);

document.querySelector(".submit").addEventListener("click", (e) => {
  const obj = serialize(userForm, { hash: true, empty: true });
  obj.creator = creator;
  obj.gender = +obj.gender;
  console.log(obj);
  axios({
    url: "http://hmajax.itheima.net/api/settings",
    method: "PUT",
    data: obj,
  })
    .then((res) => {
      console.log(res);
      /**
       * 目标4: 提示组件使用
       *  4.1 获取提示组件
       *  4.2 生成组件实例对象
       *  4.3 调用对象的显示方法
       */
      toastObj.show();
      document.querySelector(".info-box").innerHTML = res.data.message;
    })
    .catch((err) => {
      console.log(err);
    });
});
