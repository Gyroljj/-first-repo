<template>
  <div class="app">
    <MyHeader></MyHeader>
    <MyMain />
    <my-footer></my-footer>
  </div>
</template>

<script>
/**
 * 局部注册组件，三个步骤：
 * 1. 导入组件
 * 2. 注册组件 --- 注册成html标签（这样，标签就代表组件了）
 * 3. 使用组件 --- 页面中使用 <MyHeader></MyHeader>
 *
 */

// 导入组件
import MyHeader from "./components/MyHeader.vue";
import MyMain from "./components/MyMain.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  // 注册组件
  components: {
    // 标签名：导入的变量名
    MyHeader,
    MyMain,
    MyFooter,
  },
};
</script>

<style lang="less" scoped>
.app {
  padding: 10px;
  background-color: #87ceeb;
}
</style>
