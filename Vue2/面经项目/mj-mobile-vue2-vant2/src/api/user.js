// 和用户相关的请求，放在这里

import request from '@/utils/request'
// 注册请求
// export const registerAPI = () => {}

export function registerAPI (data) {
  return request({
    method: 'POST',
    url: '/h5/user/register',
    data: data
  })
}

// 登录请求
export function loginAPI (data) {
  return request.post('/h5/user/login', data)
}

export function getUserInfoAPI () {
  return request.get('/h5/user/currentUser')
}
