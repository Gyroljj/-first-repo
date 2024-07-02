<template>
  <div>
    <MyDialog>
      <!-- 为插槽提供需要展示的结构 -->
      <template v-slot:title>
        <h3>温馨提示</h3>
      </template>

      <template #default="obj">
        <p>你确定要删除吗{{ obj }}</p>
      </template>

      <template #btn="{ sex }">
        <button>确定{{ sex }}</button>
      </template>
    </MyDialog>
    <!-- <MyDialog>
      <p>你确定要退出吗</p>
    </MyDialog> -->
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data() {
    return {}
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>
