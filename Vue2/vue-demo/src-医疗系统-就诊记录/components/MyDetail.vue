<template>
  <div class="modal-mask" v-show="visible">
    <div class="modal-container">
      <div class="modal-header">
        <h3>就诊记录详情</h3>
        <span class="close-btn" @click="$emit('update:visible', false)">X</span>
      </div>
      <div class="modal-body">
        <p><strong>就诊日期：</strong>{{ ren.date }}</p>
        <p><strong>医生姓名：</strong>{{ ren.doctor }}</p>
        <p><strong>诊断结果：</strong>{{ ren.diagnosis }}</p>
        <p><strong>处方信息：</strong>{{ ren.prescription }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ren: Object,
    visible: Boolean,
  },
};
</script>
<style scoped>
.hidden {
  display: none !important;
}
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  max-width: 500px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  cursor: pointer;
}
</style>
