/*
 * @Author: 陈少泉
 * @Date: 2020-01-08 11:27:09
 * @LastEditors: 陈少泉
 * @LastEditTime: 2020-01-08 11:27:48
 * @Description: file content
 */
export const getStyle = (obj, attr) => {
  if (obj.currentStyle) {
    return obj.currentStyle[attr]
  } else {
    return document.defaultView.getComputedStyle(obj, null)[attr]
  }
}
