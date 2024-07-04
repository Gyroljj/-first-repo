// 1. 导入axios
import axios from 'axios'

// 2. 配置
// 创建一个 axios 副本(创建一个新的实例对象)
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net', // 配置请求的根路径
  timeout: 5000 // 请求超时时间
})

// 后期，还可以给 requset 配置拦截器等等
// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers.Authorization =
      'Bearer ' + localStorage.getItem('mobile-token')
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 3. 导出
export default request
