<template>
  <div>
    <!-- 需求：输入框和确认按钮默认隐藏；点击编辑显示；显示后立即获取焦点 -->
    <div class="title">
      <h2>大标题</h2>
      <button @click="edit">编辑</button>
    </div>
    <div class="form" v-show="flag">
      <input type="text" ref="refIpt" />
      <button>确认</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    }
  },
  methods: {
    edit() {
      this.flag = true // 修改flag，让输入框显示
      // this.flag = false;
      // this.flag = true;
      // this.flag = false;
      // this.flag = true;
      // 上述，数据更新了，页面不会立即更新；会在下次循环的时候更新页面
      this.$nextTick(() => {
        // 数据更新后，页面也更新后。这个函数执行
        this.$refs.refIpt.focus() // 找到输入框，让其获得焦点
      })
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  button {
    margin-left: 5px;
  }
}
</style>
