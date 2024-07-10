import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

// vuex 在内存中存储数据，读取、更新速度非常快（速度：内存 > 硬盘 > 数据库）

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { user }
})
