// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 设计稿如果是2倍图，宽是750，则 750/2 = 375，下面就写375
      // 设计稿如果是3倍图，宽是 1080，则 1080/3 = 360，下面就写360
      viewportWidth: 375
    }
  }
}
