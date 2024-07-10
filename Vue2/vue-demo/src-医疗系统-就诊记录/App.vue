<template>
  <div>
    <input placeholder="输入关键字搜索" v-model.lazy="keywords" />
    <table class="my-table">
      <thead>
        <tr>
          <th>就诊日期</th>
          <th>医生姓名</th>
          <th>诊断结果</th>
          <th>处方信息</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredRecords" :key="index">
          <td>{{ item.date }}</td>
          <td>{{ item.doctor }}</td>
          <td>{{ item.diagnosis }}</td>
          <td>{{ item.prescription }}</td>
          <td @click="detail(item)">详情</td>
        </tr>
      </tbody>
      <my-detail :ren="ren" :visible.sync="visible"></my-detail>
    </table>
  </div>
</template>
<script>
import MyDetail from "./components/MyDetail.vue";
export default {
  data() {
    return {
      keywords: "", // 和输入框双向绑定
      ren: {}, // 存一个人的信息，准备把他传递给子组件
      visible: false,
      records: [
        {
          date: "2022-01-01",
          doctor: "张三",
          diagnosis: "感冒",
          prescription: "感冒药",
        },
        {
          date: "2022-02-01",
          doctor: "李四",
          diagnosis: "头疼",
          prescription: "止疼药",
        },
        {
          date: "2022-03-01",
          doctor: "王五",
          diagnosis: "腰痛",
          prescription: "止痛贴",
        },
      ],
    };
  },
  components: {
    MyDetail,
  },
  methods: {
    detail(item) {
      // 1. 想办法把当前数据传给子组件
      this.ren = item;
      // 2. 修改visible，让弹层显示
      this.visible = true;
    },
  },
  computed: {
    filteredRecords() {
      if (this.keywords === "") {
        return this.records;
      } else {
        return this.records.filter((item) => {
          return item.doctor === this.keywords;
        });
      }
    },
  },
};
</script>
<style scoped>
.my-table {
  border-collapse: collapse;
  width: 100%;
}

.my-table td,
.my-table th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.my-table th {
  background-color: #f2f2f2;
}
</style>
