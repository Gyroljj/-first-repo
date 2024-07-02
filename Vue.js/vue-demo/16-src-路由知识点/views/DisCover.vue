<template>
  <div class="box">
    <!-- 发现音乐 -->
    <div class="link">
      <!-- <a href="#">推荐</a>
      <a href="#">排行榜</a>
      <a href="#">歌手</a> -->
      <router-link to="/discover/recommend">推荐</router-link>
      <router-link to="/discover/toplist">排行榜</router-link>
      <router-link to="/discover/artlist">歌手</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoundMusic",
};
</script>

<style lang="less" scoped>
.box {
  padding: 15px;
}

.link {
  a {
    padding-right: 10px;
    text-decoration: none;
    color: #424242;
  }
}

.content {
  padding: 10px;
}
</style>
