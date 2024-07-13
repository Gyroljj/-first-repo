// 创建计数器store

import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
  // 定义数据state
  const count = ref(0)

  // 修改数据的方法action
  const increment = () => {
    count.value++
  }

  // getter
  const doubleCount = computed(() => count.value * 2)

  // 以对象的方式return出去供组件使用
  return { count, increment, doubleCount }
})