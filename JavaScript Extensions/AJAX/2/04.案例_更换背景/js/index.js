/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址
 *  3. 网页运行后，"获取"url网址使用
 * */
// 3. 网页运行后，"获取"url网址使用
const url = localStorage.getItem("url");
if (url) document.body.style.backgroundImage = `url(${url})`;
// 1. 选择图片上传，设置body背景
document.querySelector("#bg").addEventListener("change", (e) => {
  // console.dir(e.target.files[0]) // 获取图片信息
  const fd = new FormData(); // 创建 FormData 数据格式
  fd.append("img", e.target.files[0]); // 追加数据
  // 发送请求上传图片
  axios({
    url: "http://hmajax.itheima.net/api/uploadimg",
    method: "POST",
    data: fd,
  }).then((res) => {
    // console.log(res.data.data.url)
    // 2. 上传成功时，"保存"图片url网址
    localStorage.setItem("url", res.data.data.url);
    document.body.style.backgroundImage = `url(${res.data.data.url})`;
  });
});
