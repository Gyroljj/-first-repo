<script setup>
// setup 语法糖下局部组件无需注册直接可以使用
import SonCom from './son-com.vue'

const getMessage = msg => {
  console.log(msg)
}
</script>

<template>
  <div class="father">
    <h2>父组件App</h2>
    <!-- 1.绑定属性 -->
    <SonCom @get-message="getMessage" />
  </div>
</template>
