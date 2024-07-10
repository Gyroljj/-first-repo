<template>
  <div class="App">
    <!-- 快捷链接  -->
    <xtx-short-cut />
    <!-- 头部导航  -->
    <xtx-header-nav />
    <!-- 轮播区域 -->
    <xtx-banner />
    <!-- 新鲜好物 -->
    <xtx-new-goods />
    <!-- 热门品牌 -->
    <xtx-hot-brand />
    <!-- 最新专题 -->
    <xtx-topic />
    <!-- 版权底部 -->
    <xtx-footer />
  </div>
</template>

<script>
import XtxShortCut from "./components/XtxShortCut.vue";
import XtxHeaderNav from "./components/XtxHeaderNav.vue";
import XtxBanner from "./components/XtxBanner.vue";
import XtxNewGoods from "./components/XtxNewGoods.vue";
import XtxHotBrand from "./components/XtxHotBrand.vue";
import XtxTopic from "./components/XtxTopic.vue";
import XtxFooter from "./components/XtxFooter.vue";
export default {
  components: {
    XtxShortCut,
    XtxHeaderNav,
    XtxBanner,
    XtxNewGoods,
    XtxHotBrand,
    XtxTopic,
    XtxFooter,
  },
};
</script>

<style></style>
