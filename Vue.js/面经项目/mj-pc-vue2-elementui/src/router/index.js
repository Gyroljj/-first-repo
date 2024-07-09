import store from '@/store'
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

// 加入导航守卫：如果没有登录，则不允许访问其他页面
router.beforeEach((to, from, next) => {
  // to.path --- 要访问的地址
  // from.path --- 从哪个地址跳转过来
  // next() --- 放行    next('/login') -- 不放行，并跳转到登录页面
  if (to.path !== '/login' && store.state.user.token === '') {
    next('/login')
    return
  }
  next()
})

export default router
