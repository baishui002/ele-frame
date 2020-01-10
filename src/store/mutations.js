/*
 * @Author: 陈少泉
 * @Date: 2020-01-07 14:51:04
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-10 16:19:43
 * @Description: file content
 */
const mutations = {
  setTagsList (state, data) {
    state.tagsList = data
  },
  setIsCollapse (state, data) {
    state.isCollapse = data
  }
}
export default mutations
