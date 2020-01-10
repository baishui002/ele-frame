/*
 * @Author: 陈少泉
 * @Date: 2020-01-09 14:46:51
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-10 10:48:18
 * @Description: file content
 */
import Mock from 'mockjs'
import { userInfo, userList } from './response/data'

// Mock.mock(/\/userInfo/, 'get', { code: 200, data: [1, 2] })  //
Mock.mock(/\/userInfo/, 'get', userInfo)
Mock.mock(/\/userList/, 'get', userList)

export default Mock
