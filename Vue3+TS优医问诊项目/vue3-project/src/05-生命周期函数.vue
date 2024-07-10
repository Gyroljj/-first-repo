<script setup>
// 生命周期函数的使用
// 1.引入函数
import { onMounted } from 'vue'

// 2.执行函数 传入回调
onMounted(() => {
  console.log('onMounted1')
  // 原本逻辑
})

onMounted(() => {
  console.log('onMounted3')
  // 补充逻辑
})

onMounted(() => {
  console.log('onMounted2')
})
</script>

<template>
  <div></div>
</template>
