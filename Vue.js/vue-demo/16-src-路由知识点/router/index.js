// 1. 导入所需模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2. 调用 Vue.use() 函数，将 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

import DisCover from '@/views/DisCover.vue'
import MyMusic from '@/views/MyMusic.vue'
import Follow from '@/views/Follow.vue'
import Recommend from '@/views/Recommend.vue'
import TopList from '@/views/TopList.vue'
import ArtList from '@/views/ArtList.vue'
import NotFound from '@/views/NotFound.vue'
// 3. 配置路由规则
const routes = [
  { path: '/', redirect: '/discover/recommend' },
  // 直接写到这个数组中的路由规则，级别最大。叫做一级路由
  // 一级路由 【只能】 展示在App.vue 中，所以 <router-view /> 只能放到 App.vue 中
  {
    path: '/discover',
    component: DisCover,
    children: [
      // 二级路由的path，可以不写'/'
      // 二级路由的访问地址会和一级地址拼接
      // 比如访问 推荐 地址是：  /discover/recommend
      { name: 'tj', path: 'recommend', component: Recommend },
      { name: 'phb', path: 'toplist/:id?', component: TopList },
      { name: 'gs', path: 'artlist', component: ArtList }
    ]
  },
  { path: '/mymusic', component: MyMusic },
  { path: '/follow', component: Follow },

  { path: '*', component: NotFound }
]

// 4. 创建路由的实例对象
const router = new VueRouter({
  /*路由的配置*/
  routes
  // linkActiveClass: "aaa",
  // linkExactActiveClass: "bbb",
  // mode: "history", // 修改为历史模式。
})

// 5. 导出路由的实例对象
export default router
