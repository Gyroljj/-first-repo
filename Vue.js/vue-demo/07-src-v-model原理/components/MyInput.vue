<template>
  <input
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "MyInput",
  props: ["value"],
};
</script>

<style lang="less" scoped></style>
