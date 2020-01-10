/*
 * @Author: 陈少泉
 * @Date: 2020-01-07 14:49:32
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-10 16:19:51
 * @Description: file content
 */
const tagsList = window.sessionStorage.getItem('tagsList')

const state = {
  tagsList: tagsList ? JSON.parse(tagsList) : [],
  isCollapse: false
}
export default state
