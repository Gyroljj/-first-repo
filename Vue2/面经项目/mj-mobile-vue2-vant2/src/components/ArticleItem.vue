<template>
  <!-- 单元格文章 -->
  <van-cell class="article-item" @click="$router.push(`/detail/${item.id}`)">
    <template #title>
      <div class="head">
        <img :src="item.avatar" alt="" />
        <div class="con">
          <p class="title van-ellipsis">{{ item.stem }}</p>
          <p class="other">{{ item.creator }} | {{ item.createdAt }}</p>
        </div>
      </div>
    </template>
    <template #label>
      <div class="body van-multi-ellipsis--l2">
        {{ delHtmlTag(item.content) }}
      </div>
      <div class="foot">点赞 {{ item.likeCount }} | 浏览 {{ item.views }}</div>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  // props:['item']
  props: {
    item: {
      type: Object,
      // 默认值如果是数组或对象，则需要写成函数，函数中返回数组或对象
      default: () => ({}) // 返回的对象，必须加小括号；否则会认为大括号是函数的大括号
      // default: () => {
      //   return {}
      // }
    }
  },
  methods: {
    // 清除 html 标记符号，将标签符号替换为 ""
    // /<[^>]+>/g 匹配所有标签符号
    delHtmlTag (html) {
      return html.replace(/<[^>]+>/g, '')
    }
  }
}
</script>

<style lang="less" scoped>
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
