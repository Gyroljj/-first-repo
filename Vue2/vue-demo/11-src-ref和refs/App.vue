<template>
  <div>
    <h2>App组件</h2>
    <p ref="abc">这是App组件中的p标签</p>
    <hr />
    <MyTest></MyTest>
    <hr />
    <MyForm ref="form"></MyForm>
    <button @click="$refs.form.resetFrom()">重置</button>
  </div>
</template>

<script>
import MyTest from "./components/MyTest.vue";
import MyForm from "./components/MyForm.vue";
export default {
  data() {
    return {};
  },
  components: {
    MyTest,
    MyForm,
  },
};
</script>

<style lang="less" scoped></style>
