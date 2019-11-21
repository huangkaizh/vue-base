import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './css/common.less' // 引入公共样式

// eslint-disable-next-line no-new
new Vue({
  router,
  el: '#root',
  render: h => h(App)
})
