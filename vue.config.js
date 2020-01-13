/*
 * @Author: 陈少泉
 * @Date: 2020-01-10 09:49:14
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-13 09:46:58
 * @Description: file content
 */
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

// const BASE_URL = process.env.NODE_ENV === 'development'
//   ? '/'
//   : './.'
module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  assetsDir: 'static',
  // baseUrl: './',
  // 输出文件目录
  // outputDir: process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'test' ? 'dist' : 'test',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 80,
    inline: true,
    stats: {
      colors: true
    },
    proxy: {
      // 匹配代理的url
      '/api': {
        // 目标服务器地址
        target: 'https://api.apiopen.top/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/api2': {
        // 目标服务器地址
        target: 'http://v.juhe.cn/',
        changeOrigin: true
      }
    }
    // disableHostCheck: true // 本机的host映射其他地址需要为true
  },
  lintOnSave: true,
  // configureWebpack: {

  //   module: {
  //     rules: [{
  //       test: /\.m?js$/,
  //       // exclude用下面配置的话，默认是过滤不编译node_modules 路径下的文件
  //       // exclude: /(node_modules|bower_components)/,
  //       // include 指定需要编译的文件路径
  //       include: [
  //         resolve('src'),
  //         resolve('node_modules')
  //       ],
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env']
  //         }
  //       }
  //     }]
  //   }
  // },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false
}
