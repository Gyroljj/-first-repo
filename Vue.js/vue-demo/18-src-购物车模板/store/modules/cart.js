import axios from 'axios'

export default {
  namespaced: true,
  state: {
    list: [] // 存储购物车数据
  },
  mutations: {
    // 更新list数据的方法
    updateList (state, newList) {
      state.list = newList
    },
    updateCount (state, obj) {
      // obj === { id: 3, count: 7 }}
      let row = state.list.find((item) => item.id === obj.id)
      row.count = obj.count
    }
  },
  actions: {
    // 发送ajax请求，获取全部的购物车数据
    async getListAsync (store) {
      const { data: res } = await axios.get('http://localhost:3000/list')
      // console.log(res)
      // 调用 mutation 方法，更新list数据
      store.commit('updateList', res)
    },
    // 更新商品数量的方法
    async updateCountAsync (store, obj) {
      // 1.发送请求，更新服务器的数据
      await axios.patch(`http://localhost:3000/list/${obj.id}`, obj)
      // 2.更新vuex的数据
      store.commit('updateCount', obj)
    }
  },
  getters: {
    // 总数量
    total (state) {
      return state.list.reduce((pre, item) => {
        return pre + item.count
      }, 0)
    },
    // 总价格
    amount (state) {
      return state.list.reduce((pre, item) => {
        return pre + item.count * item.price
      }, 0)
    }
  }
}
