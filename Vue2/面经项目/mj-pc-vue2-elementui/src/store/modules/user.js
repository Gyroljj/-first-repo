export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('mj-pc-token')
  },
  mutations: {
    updateToken (state, newToken) {
      state.token = newToken
      localStorage.setItem('mj-pc-token', newToken)
    }
  }
}
