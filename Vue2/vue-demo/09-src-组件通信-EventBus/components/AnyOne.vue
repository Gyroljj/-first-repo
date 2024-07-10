<template>
  <div>
    <h2>随便一个组件-1</h2>
    <button @click="send">发送数据</button>
  </div>
</template>

<script>
import bus from "@/bus"; // @ 表示src目录
export default {
  methods: {
    send() {
      bus.$emit("change", 10);
    },
  },
};
</script>

<style lang="less" scoped></style>
