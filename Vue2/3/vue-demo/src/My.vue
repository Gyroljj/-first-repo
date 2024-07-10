<template>
  <div>
    <h3>vbase进行代码提示</h3>
    <h3>组件命名：多词格式。具体来说三种写法：</h3>
    <ul>
      <li>小驼峰：abcDef.vue</li>
      <li>大驼峰：AbcDef.vue</li>
      <li>中横线：abc-def.vue</li>
    </ul>
    <p>
      补充：如果文件名不是多词格式，可以在js代码中指定name，name是多词格式也可以
    </p>
  </div>
</template>

<script>
export default {
  name: "MyVue",
  // vue代码，都要写在这个对象里面
  data() {
    return {
      uname: "zzz",
      age: 18,
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
// 如果要使用less，两个步骤：
// 1. 安装包 npm install less less-loader -D
// 2. 修改vue文件，添加lang="less"
</style>
