<script setup lang="ts">
import { ref } from 'vue'

// 在这里可以编写TS代码

// 1. 简单数据 类型推导
const count = ref(0)
count.value = 1

// 2. 复杂类型 泛型函数
const year = ref<string | number>('2022')
year.value = 2022

// 思考题
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
    price: 10
  }
]
</script>

<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
