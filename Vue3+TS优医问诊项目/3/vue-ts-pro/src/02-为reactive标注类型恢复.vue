<script setup lang="ts">
import { reactive } from 'vue'

// 在这里可以编写TS代码

// 1. 自动推导 推导出来的类型和想要的保持一致

const form = reactive({
  username: '',
  password: ''
})
form.username = 'admin'

// 2. 显式注解变量的类型 推导不出来我们想要的类型

type Form1 = {
  username: string
  password: string
  isAgree?: boolean
}
const form1: Form1 = reactive({
  username: '100',
  password: ''
})

form1.password = '123'
form1.isAgree = true

// 3. 思考题
type User = {
  username: string
  address: string
  phone: string
  gender?: string
}
const user: User = reactive({
  username: 'jack',
  address: '北京市朝阳北路',
  phone: '13211111111'
})
user.gender = '男'
</script>

<template>
  <div></div>
</template>
