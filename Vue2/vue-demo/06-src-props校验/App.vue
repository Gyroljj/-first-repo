<template>
  <div>
    <!-- 父传子，就是给组件标签，添加属性 -->
    <Son
      :str="str"
      :age="age"
      :list="list"
      :user="user"
      :visible="visible"
      :say="say"
    ></Son>
  </div>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  data() {
    return {
      str: "hello",
      age: 20,
      visible: true,
      list: ["a", "b", "c"],
      user: {
        name: "张三",
        age: 20,
      },
      say() {
        console.log(123);
      },
      hi() {
        console.log(456);
      },
    };
  },
  components: {
    Son,
  },
};
</script>

<style lang="less" scoped></style>
