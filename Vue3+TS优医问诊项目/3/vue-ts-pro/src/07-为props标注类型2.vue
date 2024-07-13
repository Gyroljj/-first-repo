<script setup lang="ts">
// 在这里可以编写TS代码

// 定义props类型

// 1. 通过类型别名(接口)定义Props类型
// 思考题
type BtnType = 'success' | 'danger' | 'warning'

type Props = {
  color: string
  size?: string
  btnType: BtnType
}

// 2. defineProps<Props>
const props = withDefaults(defineProps<Props>(), {
  size: 'middle',
  btntype: 'success'
})
</script>

<template>
  <button>button</button>
</template>
