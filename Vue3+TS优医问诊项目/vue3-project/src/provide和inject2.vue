<script setup>
import { inject } from 'vue'
// 2.接收数据
const roomData = inject('data-key')

// 接收响应式数据
const countData = inject('count-key')

const setCountData = inject('setCount-key')
</script>
<template>
  <div class="comment">
    底层组件
    <div>来自顶层组件中的数据为: {{ roomData }}</div>
    <div>来自顶层组件的响应式数据: {{ countData }}</div>
    <button @click="setCountData">增加响应式数据</button>
  </div>
</template>
