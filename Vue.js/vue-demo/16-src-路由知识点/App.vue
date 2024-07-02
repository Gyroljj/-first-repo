<template>
  <div>
    <div class="footer_wrap">
      <!-- <a href="javascript:;">发现音乐</a>
      <a href="javascript:;">我的音乐</a>
      <a href="javascript:;">关注</a> -->
      <router-link to="/discover">发现音乐</router-link>
      <router-link to="/mymusic">我的音乐</router-link>
      <router-link to="/follow">关注</router-link>
    </div>
    <div class="top">
      <!-- 一会要在这里展示 发现音乐、我的音乐、关注 三个组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}

.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}

.footer_wrap a:hover {
  background-color: #555;
}
/* .router-link-exact-active {
  color: red !important;
} */
.router-link-active {
  color: red !important;
}
</style>
