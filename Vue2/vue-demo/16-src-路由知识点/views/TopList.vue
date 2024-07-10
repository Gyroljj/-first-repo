<template>
  <div>
    <!-- 排行榜 -->
    <h2>排行榜</h2>
    <div class="contains">
      <div class="left">
        <ul>
          <li v-for="item in list" :key="item.id">
            <router-link :to="`/discover/toplist/${item.id}`">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        当前浏览的是<span>{{ getUrl.name }}</span
        >的歌曲
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "飙升榜" },
        { id: 2, name: "新歌榜" },
        { id: 3, name: "原创榜" },
        { id: 4, name: "热歌榜" },
      ],
    };
  },
  computed: {
    getUrl() {
      if (this.$route.params.id) {
        return this.list.find((item) => item.id == this.$route.params.id);
      } else {
        return {};
      }
    },
  },
};
</script>

<style lang="less" scoped>
.contains {
  display: flex;

  .left {
    flex: 1;

    a {
      text-decoration: none;
      color: #424242;
    }
  }

  .content {
    flex: 3;

    span {
      color: skyblue;
      font-weight: bold;
    }
  }
}
</style>
