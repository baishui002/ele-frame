/*
 * @Author: 陈少泉
 * @Date: 2020-01-09 15:09:33
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-10 15:51:00
 * @Description: file content
 */
import ajax from './fetch'
// let axios = new HttpRequest()

export default {
  reqUserInfo: (data) => ajax.get('/userInfo', data),
  musicDetails: (data) => ajax.get('/api/musicDetails', data),
  musicBroadcasting: (data) => ajax.get('/api/musicBroadcasting', data)
  // reqUserInfo: (data) => ajax.post('/api2/toutiao/index', data, {
  //   loadingHide: true,
  //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  // })
}
