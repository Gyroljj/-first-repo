<script setup lang="ts">
import Son from './Son.vue'
// 在这里可以编写TS代码

const getMsg = (msg: string) => {
  console.log(msg)
}
</script>

<template>
  <div>
    <Son @get-msg="getMsg"></Son>
  </div>
</template>
