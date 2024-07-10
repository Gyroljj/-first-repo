<template>
  <div>
    <h3>孙子组件 - {{ user.name }}</h3>
  </div>
</template>

<script>
export default {
  inject: ["user"],
};
</script>

<style lang="less" scoped></style>
