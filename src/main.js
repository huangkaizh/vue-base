import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './css/common.less' // 引入公共样式

window.Promise = Promise // 解决ie浏览器中Promise未定义报错， 参考https://www.cnblogs.com/wonyun/p/8076453.html

// eslint-disable-next-line no-new
new Vue({
  router,
  el: '#root',
  render: h => h(App)
})
