<script setup lang="ts">
import { computed, ref } from 'vue'

// 在这里可以编写TS代码

const count = ref(2)
const doubleCount = computed(() => count.value * 2)

// 1. ref标注类型
type Item = {
  id: string
  name: string
  price: number
}
const list = ref<Item[]>([])
list.value = [
  {
    id: '1',
    name: 'apple',
    price: 888
  },
  {
    id: '2',
    name: 'banana',
    price: 999
  },
  {
    id: '3',
    name: 'orange',
    price: 400
  }
]

// 2. 基于list筛选出大于500的商品
const filterList = computed(() => {
  return list.value.filter(item => item.price > 500)
})
</script>

<template>
  <div>
    <ul>
      <li v-for="item in filterList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
