import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由页面的导入
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Detail from '@/views/Detail.vue'
import Home from '@/views/Home.vue'

// 二级路由页面的导入
import Article from '@/views/Layout/Article.vue'
import Collect from '@/views/Layout/Collect.vue'
import Like from '@/views/Layout/Like.vue'
import User from '@/views/Layout/User.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/detail/:id', component: Detail },
  {
    path: '/',
    redirect: '/article',
    component: Home,
    children: [
      { path: 'article', component: Article }, // 面经列表
      { path: 'collect', component: Collect }, // 收藏
      { path: 'like', component: Like }, // 喜欢
      { path: 'user', component: User } // 我的
    ]
  }
]
const router = new VueRouter({ routes })

// 白名单(就是一个数组，数组收录所有无需登录即可访问的页面)

// 路由前置守卫
// 1. to 往哪去
// 2. from 从哪来
// 3. next 是否放行 next() 放行 next(路径) 拦截到某个页面

export default router
