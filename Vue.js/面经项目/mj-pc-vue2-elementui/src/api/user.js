// 和用户相关的请求，都放到这里

import request from '@/utils/request'

// 登录请求
export const loginAPI = data => {
  return request.post('/auth/login', data)
}

// 获取人员相关信息
export const getUserAPI = () => {
  return request.get('/auth/currentUser')
}

// 获取统计数据（折线图用）
export const getLineAPI = () => {
  return request.get('/analysis/DailyVisitTrend')
}
