<template>
  <div>
    <h2>随便一个组件-2</h2>
  </div>
</template>

<script>
import bus from "@/bus";
export default {
  created() {
    bus.$on("change", (newValue) => {
      console.log("接收到bus事件", newValue); // newValue就是接收到的数据
    });
  },
};
</script>

<style lang="less" scoped></style>
