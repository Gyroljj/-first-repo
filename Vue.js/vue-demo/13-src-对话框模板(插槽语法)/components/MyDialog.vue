<template>
  <div class="dialog">
    <div class="dialog-header">
      <!-- 标题也不能写死 -->
      <slot name="title"></slot>
      <span class="close">✖️</span>
    </div>
    <div class="dialog-content">
      <!-- 内容区，内容不固定，所以不能写死，这时用 <slot></slot> 占位 -->
      <!-- 没有name属性的插槽，其实也有名字，叫做 default -->
      <slot username="张三" age="21"></slot>
    </div>
    <div class="dialog-footer">
      <!-- 按钮是什么，也不能写死 -->
      <slot name="btn" sex="男"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.dialog {
  width: 470px;
  height: 230px;
  padding: 0 25px;
  background-color: #ffffff;
  margin: 40px;
  border-radius: 5px;
}
.dialog-header {
  height: 70px;
  line-height: 70px;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.dialog-header .close {
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
}
.dialog-content {
  height: 80px;
  font-size: 18px;
  padding: 15px 0;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
.dialog-footer button {
  width: 65px;
  height: 35px;
  background-color: #ffffff;
  border: 1px solid #e1e3e9;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  border-radius: 3px;
}
.dialog-footer button:last-child {
  background-color: #007acc;
  color: #fff;
}
</style>
