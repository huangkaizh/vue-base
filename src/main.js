import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './css/common.less' // 引入公共样式

window.Promise = Promise // 解决ie浏览器中Promise未定义报错， 参考https://www.cnblogs.com/wonyun/p/8076453.html

const errorHandler = (error, vm) => {
  console.error('抛出全局异常')
  console.error(vm)
  console.error(error)
}

Vue.config.errorHandler = errorHandler
Vue.prototype.$throw = error => errorHandler(error, this)

const Bus = new Vue()

// eslint-disable-next-line no-new
new Vue({
  router,
  el: '#root',
  data: {
    Bus
  },
  render: h => h(App)
})
