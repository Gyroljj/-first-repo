<template>
  <div class="goods">
    <h2>{{ obj.name }}</h2>
    <p>商品单价:{{ obj.price }}</p>
    <p>商品描述：{{ obj.info }}</p>
    <button @click="$emit('kanyidao', obj.id)">砍一刀</button>
  </div>
</template>

<script>
export default {
  // 子组件，需要通过 props接收传递过来的数据
  props: ["obj"],
};
</script>

<style lang="scss" scoped>
.goods {
  margin: 10px;
  padding: 10px;
  border: solid 2px #ccc;
  border-radius: 5px;
}
</style>
