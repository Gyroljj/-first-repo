<script setup>
import { ref } from 'vue'

const name = ref('son')
const setName = () => {
  name.value = 'test new name'
}
defineExpose({
  name,
  setName
})
</script>

<template>
  <div class="son">
    <h3>子组件son</h3>
  </div>
</template>
