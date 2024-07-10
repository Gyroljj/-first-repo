<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a
        href="javascript:;"
        :class="{ active: sorter === 'weight_desc' }"
        @click="changeSorter('weight_desc')"
        >推荐</a
      >
      <a
        href="javascript:;"
        :class="{ active: sorter === null }"
        @click="changeSorter(null)"
        >最新</a
      >
      <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    </nav>

    <!-- 这里放列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem
        v-for="item in list"
        :key="item.id"
        :item="item"
      ></ArticleItem>
    </van-list>
  </div>
</template>

<script>
import { articleAPI } from '@/api/article'
export default {
  name: 'article-page',
  data () {
    return {
      current: 1, // 页码，获取第1页的数据
      sorter: 'weight_desc', // weight_desc--获取推荐的面试题；  null--获取最新的面试题
      list: [], // 存储要展示的面经列表数据
      loading: false, // true表示不允许加载数据（正在加载某一页的数据）；false表示此时没有发生请求获取数据
      finished: false
    }
  },
  methods: {
    // 获取面列表数据
    async onLoad () {
      // 会将 loading 设置成 true,表示正在请求数据，此时不能重复加载
      const { data: res } = await articleAPI({
        current: this.current,
        sorter: this.sorter
      })
      // console.log(res)
      // 拿到某一页数据之后，不是赋值给list，而是向list里面添加
      this.list.push(...res.data.rows)
      this.loading = false
      this.current++ // 将页码加1
      if (this.current > res.data.pageTotal) {
        this.finished = true
      }
    },
    // 改变 sorter
    changeSorter (sorter) {
      this.sorter = sorter // 切换 “推荐” 和 “最新”
      this.current = 1 // 将页码重置为1
      this.list = [] // 重置存储数据的数组
      this.loading = true // 避免重复发送请求
      this.onLoad() // 调用方法，发送请求
    }
  }
  // created () {
  //   this.onLoad()
  // }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
