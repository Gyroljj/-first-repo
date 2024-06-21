/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */
// 1.1 设置省份下拉菜单数据
axios({
  url: 'http://hmajax.itheima.net/api/province'
}).then(res => {
  // console.log(res.data.list)
  const list = res.data.list
  document.querySelector('.province').innerHTML += list.map(item => {
    return `<option value="${item}">${item}</option>`
  }).join('')
})
// 1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
document.querySelector('.province').addEventListener('change', async e => {
  // 清空地区下拉菜单
  document.querySelector('.city').innerHTML = `<option value="">城市</option>`
  console.log(e.target.value)
  const { data: { list } } = await axios({
    url: 'http://hmajax.itheima.net/api/city',
    method: 'GET',
    params: {
      pname: e.target.value
    }
  })
  // console.log(list)
  document.querySelector('.city').innerHTML += list.map(item => {
    return `<option value="${item}">${item}</option>`
  }).join('')
})
// 1.3 切换城市，设置地区下拉菜单数据
document.querySelector('.city').addEventListener('change', async e => {
  document.querySelector('.area').innerHTML = `<option value="">地区</option>`
  // console.log(e.target.value) // 获取城市
  // 怎么获取省呢?
  // console.log(document.querySelector('.province').value)
  const { data: { list } } = await axios({
    url: 'http://hmajax.itheima.net/api/area',
    method: 'GET',
    params: {
      pname: document.querySelector('.province').value,
      cname: e.target.value
    }
  })
  console.log(list)
  document.querySelector('.area').innerHTML += list.map(item => {
    return `<option value="${item}">${item}</option>`
  }).join('')
})
/**
 * 目标2: 提交数据,显示结果
 *  2.1 点击事件 
 *  2.2 获取数据
 *  2.3 提交数据
 *  2.4 清空内容
 */
const infoFrom = document.querySelector('.info-form')
document.querySelector('.submit').addEventListener('click', async e => {
  const data = serialize(infoFrom, { hash: true, empty: true })
  // console.log(FormData)
  const res = await axios({
    url: 'http://hmajax.itheima.net/api/feedback',
    method: 'POST',
    data: data
  })
  alert(res.data.message)
  infoFrom.reset()
})