<template>
  <div>
    <p>{{ str }}</p>
    <p>{{ age }}</p>
    <p>{{ visible }}</p>
  </div>
</template>

<script>
export default {
  name: "SonPage",
  // props 写成数组格式
  // props: ["str", "age", "visible", "say"],

  // props 写成对象格式（可以对接收的变量进行校验）
  // 1. required: true 表示父组件必须传统这个值
  // 2. type: String|Number|Boolean|Array|Object|Function 表示该变量的类型
  // 2.1 type: [String, Number, Boolean, Array, Object, Function] 表示该变量的类型
  // 3. default: '' 表示该变量默认值
  // 3.1 默认值如果是对象或数组，则需要写成函数，函数中返回对象或数组
  props: {
    // str: {
    //   /* 在这里对接收的数据进行校验 */
    // },
    str: { required: true }, // 表示父组件必须传递str这项数据
    age: {
      default: 100, // 如果父组件没有传递age，则让age等于100
      // type: Number, // Number 不要加引号
      type: [Number, String], // 传递过来的数据，可以是数字或字符串
    },
    user: {
      default: () => {
        return {
          name: "张三",
          age: 20,
        }; // 对于默认值是数组或对象的情况，默认值要写一个函数，函数中返回默认值
      },
    },
    list: Array,
    // 表示只校验类型，类型是数组即可
    visible: {},
    say: Function, // 表示只校验类型，类型是函数即可

    created() {
      this.say(); // 调用接收到的方法
    },
  },
};
</script>

<style lang="less" scoped></style>
