<template>
  <div>
    <button @click="visible = true">删除</button>
    <MyDialog :visible.sync="visible"></MyDialog>
    <!-- <MyDialog :visible="visible" @update:visible="xx"></MyDialog> -->
    <!-- 
      :属性.sync="变量"
      等同于 :属性="变量"   +   @update:属性=""
    -->
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue";
export default {
  data() {
    return {
      visible: false, // 控制弹出框的显示与隐藏
    };
  },
  components: {
    MyDialog,
  },
};
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>
uk,hhrdd
