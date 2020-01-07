/*
 * @Author: 陈少泉
 * @Date: 2020-01-03 16:01:50
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-07 14:57:50
 * @Description: file content
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})
