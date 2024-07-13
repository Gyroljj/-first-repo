<script setup lang="ts">
// 使用counterStore
// 1. 导入一个use打头的方法
import { useCounterStore } from './store/counterStore'
import { useChannelStore } from './store/channelStore'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

// 2. 执行方法得到store示例对象
const counterStore = useCounterStore()
const channelStore = useChannelStore()
console.log(counterStore)
console.log(channelStore)

// 触发异步action
onMounted(() => {
  channelStore.getList()
})

// 直接解构赋值 (响应式丢失)
// const { count, doubleCount, increment } = counterStore

// storeToRefs (只能支持数据 state/getters)
const { count, doubleCount } = storeToRefs(counterStore)

const { increment } = counterStore
</script>

<template>
  <button @click="increment">{{ count }}</button>
  getter: {{ doubleCount }}

  <ul>
    <li v-for="item in channelStore.list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>
