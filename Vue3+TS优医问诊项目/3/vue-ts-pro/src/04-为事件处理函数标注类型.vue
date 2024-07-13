<script setup lang="ts">
// 在这里可以编写TS代码

// 事件处理函数
const inputChange = (e: Event) => {
  console.log((e.target as HTMLInputElement).value)
}

// 思考题
const clickHandler = (e: Event) => {
  console.log((e.target as HTMLButtonElement).innerHTML)
}
</script>
<template>
  <div>
    <input type="text" @change="inputChange" />
    <button @click="clickHandler">click</button>
  </div>
</template>
