<script setup>
// 2.通过defineEmits() -> emit(this.$emit('事件名',数据))
const emit = defineEmits(['get-message'])
const sendMsg = () => {
  // 触发自定义事件 传数据给父组件
  emit('get-message', '我是子组件son')
}
</script>

<template>
  <div class="son">
    <h3>子组件son</h3>
    <button @click="sendMsg">触发自定义事件</button>
  </div>
</template>
