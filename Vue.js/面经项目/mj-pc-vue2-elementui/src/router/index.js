import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入所需的组件

// import Login from '@/views/login'
// import Layout from '@/views/layout'
// import Article from '@/views/article'
// import Dashboard from '@/views/dashboard'

// const Login = () => import('@/views/login')

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: () => import('@/views/login') },
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/views/layout'),
    children: [
      { path: '/article', component: () => import('@/views/article') },
      { path: '/dashboard', component: () => import('@/views/dashboard') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
