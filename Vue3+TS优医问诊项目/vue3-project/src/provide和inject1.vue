<script setup>
import { provide, ref } from 'vue'
import RoomMsgItem from './room-msg-item.vue'
// 组件嵌套关系:
// RoomPage ->RoomMsgItem -> RoomMsgComment

// 1.顶层组件提供数据
provide('data-key', 'this is room data')

// 传递响应式数据
const count = ref(0)
provide('count-key', count)
setTimeout(() => {
  count.value = 1
}, 1000)

// 传递方法(谁的数据谁负责修改)
const setCount = () => {
  count.value++
}
provide('setCount-key', setCount)
</script>

<template>
  <div class="page">
    顶层组件
    <RoomMsgItem />
  </div>
</template>
