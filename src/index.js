import Vue from 'vue'
import App from './pages/app.vue'
import './css/common.less' // 引入公共样式

// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  render: h => h(App)
})
