<template>
  <div>
    <h3>关注的榜单</h3>
    <a href="javascript:;" @click="xingebang">新歌榜</a>
    <a href="javascript:;">热歌榜</a>
    <h3>关注的歌手</h3>
    <a href="javascript:;" @click="zhanghuimei">张惠妹</a>
    <a href="javascript:;">薛之谦</a>
  </div>
</template>

<script>
export default {
  name: "FollowPage",
  methods: {
    xingebang() {
      // 写法一：直接写字符串，写完整的地址
      // this.$router.push(`/discover/toplist/2`);
      // 写法二：传入对象，使用name进行跳转
      this.$router.push({
        name: "phb", // 路由规则的name值
        params: {
          // 传递的动态路由参数
          id: 2,
        },
      });
      // 写法三：传入对象，使用path进行跳转
      // this.$router.push({
      //   path: "/discover/toplist",
      //   params: {
      //     id: 2,
      //   },
      // });
    },
    zhanghuimei() {
      // 写法一：直接写字符串，写完整的地址
      // this.$router.push(`/discover/artlist?id=1`);
      // 写法二：传入对象，使用name进行跳转
      // this.$router.push({
      //   name: "gs",
      //   query: {
      //     id: 1,
      //   },
      // });
      // 写法三：传入对象，使用path进行跳转
      this.$router.push({
        path: "/discover/artlist",
        query: {
          id: 1,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
div {
  padding: 15px;
}

h3 {
  margin: 0;
}

a {
  display: inline-block;
  margin: 10px;
  text-decoration: none;
  color: #424242;
}
</style>
