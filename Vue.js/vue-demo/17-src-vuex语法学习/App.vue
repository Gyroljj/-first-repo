<template>
  <div>
    <AnyOne></AnyOne>
    <hr />
    <AnyTwo></AnyTwo>
  </div>
</template>

<script>
import AnyOne from './components/AnyOne.vue'
import AnyTwo from './components/AnyTwo.vue'
export default {
  data () {
    return {}
  },
  components: {
    AnyOne,
    AnyTwo
  }
}
</script>

<style lang="less" scoped></style>
