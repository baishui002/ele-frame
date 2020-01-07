/*
 * @Author: 陈少泉
 * @Date: 2020-01-07 14:49:32
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-07 15:49:35
 * @Description: file content
 */
const tagsList = window.sessionStorage.getItem('tagsList')

const state = {
  tagsList: tagsList ? JSON.parse(tagsList) : []
}
export default state
