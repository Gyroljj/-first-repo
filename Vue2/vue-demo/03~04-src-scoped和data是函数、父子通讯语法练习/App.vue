<template>
  <div class="App">
    <h2>App组件</h2>

    <!-- 父传子语法：
        父组件向子组件传递数据，通过自定义属性的方式
    -->
    <!-- <my-test :id="goodsList[0].id" :name="goodsList[0].name" /> -->

    <!-- <my-test :item="goodsList[0]" />
    <my-test :item="goodsList[1]" />
    <my-test :item="goodsList[2]" /> -->

    <my-test
      v-for="item in goodsList"
      :key="item.id"
      :obj="item"
      @kanyidao="changePrice"
    />
  </div>
</template>

<script>
import MyTest from "./components/MyTest.vue";
export default {
  data() {
    return {
      goodsList: [
        { id: 1, name: "方便面", price: 2.5, info: "好吃不贵" },
        { id: 2, name: "矿泉水", price: 3.5, info: "好喝不贵" },
        { id: 3, name: "冰红茶", price: 4.5, info: "价钱合理" },
      ],
    };
  },
  methods: {
    changePrice(id) {
      console.log(id);
      let row = this.goodsList.find((item) => item.id === id);
      row.price--;
    },
  },
  components: { MyTest },
};
</script>

<style scoped>
p {
  color: blue;
}
</style>
