import Vue from 'vue'
import App from './App.vue'

import store from '@/store' // 导入某个文件夹的index.js文件，index.js可以省略不写

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
