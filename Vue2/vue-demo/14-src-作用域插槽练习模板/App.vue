<template>
  <div>
    <MyTable :data="list">
      <!-- 下面一行是老版本语法 -->
      <!-- <template slot-scope="{ id }"> -->
      <template #default="{ id }">
        <button @click="del(id)">移除</button>
      </template>
    </MyTable>

    <MyTable :data="list2">
      <button>编辑</button>
      <!-- 可以在插槽里传递组件 -->
      <!-- <MyTest></MyTest> -->
    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
export default {
  data() {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 }
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 }
      ]
    }
  },
  components: {
    MyTable
  },
  methods: {
    del(id) {
      this.list = this.list.filter((item) => item.id !== id)
    }
  }
}
</script>
