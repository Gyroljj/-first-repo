<template>
  <div class="box">
    <h3>需求1：让输入框立即获取焦点</h3>
    <div class="focus">
      <input type="text" v-focus />
    </div>
    <h3>需求2：Ajax请求数据，并设计loading指令</h3>
    <!-- list数据为空，加 loading 类，让loading图片显示 -->
    <!-- list数据不为空，移除 loading 类，让loading图片隐藏 -->
    <ul v-loading="list.length">
      <li class="news" v-for="item in list" :key="item.id">
        <div class="left">
          <div class="title">{{ item.title }}</div>
          <div class="info">
            <span>{{ item.source }}</span>
            <span>{{ item.time }}</span>
          </div>
        </div>
        <div class="right">
          <img :src="item.img" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// 安装 axios =>  npm i axios 或者 yarn add axios
// 安装如果报错，则加 --legacy-peer-deps 选项
// 接口地址：http://hmajax.itheima.net/api/news
// 请求方式：get
// 请求参数：无
import axios from "axios";
export default {
  directives: {
    // 刷新页面后，立即判断有没有数据，loading图片要不要显示
    loading: {
      inserted(el, obj) {
        // 判断有没有数据
        obj.value <= 0
          ? el.classList.add("loading")
          : el.classList.remove("loading");
      },
      update(el, obj) {
        // 判断有没有数据
        obj.value <= 0
          ? el.classList.add("loading")
          : el.classList.remove("loading");
      },
    },
    // 指令名: {},
  },
  data() {
    return {
      list: [],
    };
  },
  async created() {
    const {
      data: { data },
    } = await axios.get("http://hmajax.itheima.net/api/news");
    setTimeout(() => {
      this.list = data;
    }, 2000);
  },
};
</script>

<style>
.loading::before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff url("./loading.gif") no-repeat;
  content: "";
}
.box {
  width: 800px;
  min-height: 500px;
  position: relative;
}
.focus,
ul {
  border: 3px solid orange;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}
.news {
  display: flex;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
}
.news .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}
.news .left .title {
  font-size: 20px;
}
.news .left .info {
  color: #999999;
}
.news .left .info span {
  margin-right: 20px;
}
.news .right {
  width: 160px;
  height: 120px;
}
.news .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
