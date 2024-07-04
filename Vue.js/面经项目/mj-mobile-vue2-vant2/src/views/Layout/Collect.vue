<template>
  <div class="collect-page">
    <!-- 标题 -->
    <van-nav-bar title="我的收藏" />
    <!-- 我收藏的面试题列表-->
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
import { collectAndLikeListAPI } from '@/api/article'
export default {
  name: 'collect-page',
  data () {
    return {
      current: 1, // 页码，获取第1页的数据
      list: [], // 存储要展示的面经列表数据
      loading: false, // true表示不允许加载数据（正在加载某一页的数据）；false表示此时没有发生请求获取数据
      finished: false
    }
  },
  methods: {
    // 获取面列表数据
    async onLoad () {
      // 会将 loading 设置成 true,表示正在请求数据，此时不能重复加载
      const { data: res } = await collectAndLikeListAPI({
        page: this.current,
        optType: 2
      })
      // console.log(res)
      // 拿到某一页数据之后，不是赋值给list，而是向list里面添加
      this.list.push(...res.data.rows)
      this.loading = false
      this.current++ // 将页码加1
      if (this.current > res.data.pageTotal) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.collect-page {
  margin-bottom: 50px;
  // margin-top: 44px;
}
</style>
