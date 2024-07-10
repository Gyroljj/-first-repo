const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 允许打包的结果，以文件方式访问（允许双击打开）
  publicPath: './',
  // 去掉map文件
  productionSourceMap: false,
  // 配置排除哪些第三方包
  configureWebpack: {
    // 排除项
    externals: {
      // 键(第三方包名): 值(引入echarts.js后，window中多了什么)
      axios: 'axios',
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      echarts: 'echarts',
      'element-ui': 'ELEMENT',
      'vue-quill-editor': 'VueQuillEditor'
    }
  }
})
