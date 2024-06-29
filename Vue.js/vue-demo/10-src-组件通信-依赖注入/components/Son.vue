<template>
  <div>
    <h2>儿子组件 - {{ user.name }}</h2>
    <hr />
    <GrandSon></GrandSon>
  </div>
</template>

<script>
import GrandSon from "./GrandSon.vue";
export default {
  name: "SonPage",
  components: {
    GrandSon,
  },
  inject: ["user"],
};
</script>

<style lang="less" scoped></style>
