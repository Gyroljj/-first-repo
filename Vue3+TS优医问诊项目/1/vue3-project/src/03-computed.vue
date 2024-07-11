<script setup>
// 原始响应式数组
// 1.导入computed
import { ref, computed } from 'vue'

const list = ref([1, 2, 3, 4, 5, 6, 7, 8])
// 2.执行函数 return计算之后的值 变量接收
const computedList = computed(() => {
  return list.value.filter(item => item > 2)
})

setTimeout(() => {
  list.value.push(9, 10)
}, 2000)
</script>

<template>
  <div>
    <div>{{ list }}</div>
    <div>{{ computedList }}</div>
  </div>
</template>
