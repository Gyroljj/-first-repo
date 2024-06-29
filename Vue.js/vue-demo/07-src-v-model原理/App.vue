<template>
  <div>
    <h3>需求1：不用v-model实现双向绑定</h3>
    <!-- <input type="text" :value="uname" @input="changValue" /> -->
    <input type="text" v-model="uname" />
    <p>结论： v-model 可以拆分成 :value + @input</p>
    <hr />

    <h3>需求2：实现输入框组件的v-model</h3>
    <!-- <MyInput :value="age" @input="changAge"></MyInput> -->
    <my-input v-model="age"></my-input>
    <p>结论：组件的v-mode需要子组件的配合。</p>
    <p>结论：子组件需要接收value属性，并触发input事件</p>
    <hr />

    <h3>需求3：实现下拉框组件的v-model</h3>
    <!-- <MySelect :value="city" @input="changCity"></MySelect> -->
    <my-select v-model="city"></my-select>
    <p>下拉框的v-model相当于 :value + @input</p>
    <hr />
    <p>总结：v-model === :value + @input</p>
    <p>总结：父传子，为了把数据传给子组件，设置表单元素的默认值</p>
    <p>总结：子传父，为了把表单元素的值，传给父组件，修改data数据</p>
  </div>
</template>

<script>
import MyInput from "./components/MyInput.vue";
import MySelect from "./components/MySelect.vue";
export default {
  data() {
    return {
      uname: "张三",
      age: 20,
      city: "北京",
    };
  },
  components: {
    MyInput,
    MySelect,
  },
  methods: {
    changValue(e) {
      this.uname = e.target.value;
    },
    changAge(e) {
      this.age = e;
    },
    changCity(e) {
      this.city = e;
    },
  },
};
</script>

<style lang="less" scoped>
p {
  background-color: orange;
}
</style>
