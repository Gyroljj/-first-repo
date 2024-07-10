import Vue from "vue";
import App from "./App.vue";

// 全局注册组件（注册后，可以在任何组件中使用）
// 1.导入组件
import MyButton from "./components/MyButton.vue";
// 2.全局注册组件
// Vue.component("标签名", 导入的变量名)
Vue.component("MyButton", MyButton);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
