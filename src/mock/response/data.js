/*
 * @Author: 陈少泉
 * @Date: 2020-01-09 14:47:56
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-10 15:51:48
 * @Description: file content
 */
export const userInfo = () => {
  return {
    code: 200,
    msg: 'success',
    data: [
      1, 2, 3
    ]
  }
}

export const userList = () => {
  return {
    code: 200,
    msg: 'success',
    data: [
      { name: 'xiaoming', age: 14 },
      { name: 'limei', age: 15 },
      { name: 'zhangsan', age: 17 }
    ]
  }
}
