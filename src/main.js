/*
 * @Author: 陈少泉
 * @Date: 2020-01-03 16:01:50
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-13 09:55:34
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.css'
// import axios from 'axios'
import API from './api/api'
if (process.env.NODE_ENV !== 'production') require('./mock')

console.log(11, process.env.NODE_ENV)
var a = ''
Vue.use(ElementUI)
Vue.config.productionTip = false
// console.log(222, API)
Vue.prototype.$axios = API
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
