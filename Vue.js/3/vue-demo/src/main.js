import Vue from "vue"; // 导入Vue
import App from "./App.vue"; // 导入根组件
// import App from "./MyVue.vue"; // 导入根组件

Vue.config.productionTip = false; // 关闭温馨提示

new Vue({
  // el: '#app', // el 等价于 $mount('#app')
  render: (h) => h(App),
}).$mount("#app");
