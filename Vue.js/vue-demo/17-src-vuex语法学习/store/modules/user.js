// 存放用户相关的数据
export default {
  // 开启命名空间
  namespaced: true, // 必须的操作
  // state 用于存储数据（存储状态）（Vuex状态管理）
  state: {
    age: 20,
    uname: '张三',
    list: [
      { id: 1, name: '吃饭', isDone: false },
      { id: 2, name: '睡觉', isDone: false },
      { id: 3, name: '听歌', isDone: true }
    ]
  },
  // mutations 作用是修改state数据；而且是修改state数据的【唯一途径】
  // 为了方便找到state数据，插件作者会给每一个方法传递state参数
  // 所有方法不支持异步更新。只能放同步代码
  mutations: {
    updateAge (state, n) {
      state.age = n
    }
  },
  // actions 里面放异步方法
  actions: {
    updateAgeAfter3s (store, a) {
      setTimeout(() => {
        store.commit('updateAge', a)
      }, 3000)
    }
  },
  // getters 是vuex中的计算属性（和组件中的计算属性意义一样，但是不支持set修改）
  // 为了方便取state中的数据：插件作者会给每个计算属性方法，传递一个 state 参数
  getters: {
    abc (state) {
      return state.age * state.age
    },
    isAll (state) {
      return state.list.every((item) => item.isDone === true)
    }
  }
}
