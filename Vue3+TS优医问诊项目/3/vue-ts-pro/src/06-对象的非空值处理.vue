<script setup lang="ts">
import { onMounted, ref } from 'vue'

// 在这里可以编写TS代码

const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  // 1. 可选链方案
  // inputRef.value?.focus()
  // 2. 条件判断方案
  // if (inputRef.value) {
  //   inputRef.value.focus()
  // }
  // 3. 非空断言方案
  inputRef.value!.focus()
})
</script>
<template>
  <div>
    <input type="text" ref="inputRef" />
  </div>
</template>
