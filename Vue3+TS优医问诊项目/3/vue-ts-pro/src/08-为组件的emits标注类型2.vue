<script setup lang="ts">
// 在这里可以编写TS代码

// 给emits标注类型

// 1. 定义Emits类型
type ListItem = {
  id: number
  name: string
}

type Emits = {
  (e: 'get-msg', msg: string): void
  (e: 'get-list', list: ListItem[]): void
}

// 2. 给defineEmits传递泛型参数

const emit = defineEmits<Emits>()

const clickHandler = () => {
  // 触发自定义事件
  emit('get-msg', 'son')
  emit('get-list', [{ id: 1001, name: '1' }])
}
</script>

<template>
  <button @click="clickHandler">发送数据给父组件</button>
</template>
