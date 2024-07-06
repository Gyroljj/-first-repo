// 存放任务列表相关的数据
export default {
  namespaced: true,
  state: {
    list: [
      { id: 1, name: '吃饭', isDone: true },
      { id: 2, name: '睡觉', isDone: false },
      { id: 3, name: '打豆豆', isDone: true }
    ]
  }
}
