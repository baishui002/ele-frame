/*
 * @Author: 陈少泉
 * @Date: 2020-01-03 16:01:50
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-07 10:29:28
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
