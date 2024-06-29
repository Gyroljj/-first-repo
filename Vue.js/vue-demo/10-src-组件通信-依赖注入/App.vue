<template>
  <div>
    <Son></Son>
  </div>
</template>

<script>
// import { computed } from "vue";
import Son from "./components/Son.vue";
export default {
  provide: {
    // 传递给后代组件的数据
    // 传递的对象是响应式的
    // 传递的其他数据，是非响应式的
    user: { name: "张三", age: 20 },
    // phone: computed("123456"),
  },
  data() {
    return {};
  },
  components: {
    Son,
  },
};
</script>

<style lang="less" scoped></style>
