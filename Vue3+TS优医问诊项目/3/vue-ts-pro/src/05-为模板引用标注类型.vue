<script setup lang="ts">
import { onMounted, ref } from 'vue'

// 在这里可以编写TS代码

const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() =>
  // inputRef.value存放的数据在组件渲染完毕之前是null
  // 渲染完毕之后才是真实的dom
  // 可选链
  inputRef.value?.focus()
)

// 思考题

const aRef = ref<HTMLAnchorElement | null>(null)

onMounted(() => {
  console.log(aRef.value?.href)
})
</script>
<template>
  <div>
    <input type="text" ref="inputRef" />
    <a href="#" ref="aRef">click</a>
  </div>
</template>
