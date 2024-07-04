import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ArticleItem from './components/ArticleItem.vue'

// 全部导入：将所有的vant组件，一次性导入到项目中
import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/index.less' // 引入vant的less文件
Vue.component('ArticleItem', ArticleItem)
Vue.use(Vant)

// 导入按需导入的配置文件
// import { Button, Tabbar, TabbarItem } from 'vant'

// Vue.use(Button)
// Vue.use(Tabbar)
// Vue.use(TabbarItem)
// 组件的全局注册

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
