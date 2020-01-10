/*
 * @Author: 陈少泉
 * @Date: 2020-01-09 15:09:38
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-10 16:06:18
 * @Description: file content
 */
import axios from 'axios'
import { Loading } from 'element-ui'
// import router from '@/router'

const baseURL = ''
let loadingInstance

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = []
  }

  // 全局配置
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 1000 * 10
    }
    return config
  }

  get (url, data, options) {
    let obj = {
      url,
      method: 'get',
      params: data
    }
    options = Object.assign(this.getInsideConfig(), options, obj)
    // console.log('get', options)
    return this.request(options)
  }

  post (url, data, options) {
    let obj = {
      url,
      method: 'post',
      data
    }
    options = Object.assign(this.getInsideConfig(), options, obj)
    // console.log('post', options)
    return this.request(options)
  }

  request (options) {
    const instance = axios.create()
    this.interceptors(instance, options.url)
    return instance(options)
  }

  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // console.log('loading...')
        loadingInstance = Loading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.4)'
        })
      }

      if (!config.loadingHide) {
        this.queue[url] = true
      }
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      // console.log('response', res)
      this.distroy(url)
      const { data } = res
      return data
    }, error => {
      this.distroy(url)

      // 响应状态码判断
      // if (error.response.data.code === 400) {
      //   router.push({ name: 'login' })
      // }
      // console.log('res...err', error.response.data)
      return Promise.reject(error.response.data)
    })
  }
  distroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
      loadingInstance.close()
    }
  }
}

const instance = new HttpRequest()
export default instance
// export default HttpRequest
