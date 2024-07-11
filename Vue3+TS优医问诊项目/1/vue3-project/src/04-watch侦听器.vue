<!--  watch 侦听单个数据源 -->
<!-- <script setup>
import { ref, watch } from 'vue'

const count = ref(0)
const setCount = () => {
  count.value++
}

// watch 侦听单个数据源
// ref对象不需要加 .value
watch(count, (newValue, oldValue) => {
  console.log('变化了', newValue, oldValue)
})
</script> -->

<!-- watch 侦听单多数据源 -->
<!-- <script setup>
import { ref, watch } from 'vue'

const count = ref(0)
const name = ref('cp')
const changeCount = () => {
  count.value++
}
const changName = () => {
  name.value = 'cp2'
}
// watch 侦听单多数据源
watch([count, name], ([newCount, newName], [oldCount, oldName]) => {
  console.log('数据变化了', [newCount, newName], [oldCount, oldName])
})
</script> -->

<!-- watch 立即执行 immediate -->
<!-- <script setup>
import { ref, watch } from 'vue'

const count = ref(0)
const setCount = () => {
  count.value++
}

// watch 立即执行 immediate
watch(
  count,
  (newValue, oldValue) => {
    console.log('变化了', newValue, oldValue)
  },
  {
    immediate: true // 立即执行
  }
)
</script> -->

<!-- watch 深度侦听 deep -->
<!-- <script setup>
import { ref, watch } from 'vue'

const state = ref({ count: 0, age: 20 })
const changeStateByCount = () => {
  state.value.count++
}

// watch 深度侦听 deep
watch(
  state,
  (newValue, oldValue) => {
    console.log('变化了', newValue, oldValue)
  },
  {
    deep: true // 深度监听
  }
)
</script> -->

<!-- watch 精确侦听某个具体属性 -->
<script setup>
import { ref, watch } from 'vue'

const state = ref({ count: 0, age: 20 })

const changeStateByCount = () => {
  state.value.count++
}

const changeStateByAge = () => {
  state.value.age++
}
// watch 精确侦听某个具体属性
watch(
  () => state.value.count,
  () => {
    console.log('count变化了')
  }
)
// deep性能损耗 尽量不开启deep
</script>
<template>
  <div>
    <button @click="changeStateByCount">{{ state.count }}</button>
    <button @click="changeStateByAge">{{ state.age }}</button>
    <!-- <button @click="changName">{{ name }}</button> -->
  </div>
</template>
