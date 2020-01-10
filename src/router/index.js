/*
 * @Author: 陈少泉
 * @Date: 2020-01-03 16:01:50
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-07 15:17:32
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: 'home'
  // },
  {
    path: '/',
    component: () => import('../../src/views/layout'),
    redirect: 'home',
    // name: 'home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('../../src/views/home/home')
      },
      {
        path: '/table',
        name: 'table',
        meta: {
          title: '基础表格'
        },
        component: () => import('../../src/views/table/table')
      },
      {
        path: '/tabs',
        name: 'tabs',
        meta: {
          title: 'tab选项卡'
        },
        component: () => import('../../src/views/tabs/tabs')
      },
      {
        path: '/form',
        name: 'form',
        meta: {
          title: '基本表单'
        },
        component: () => import('../../src/views/form/form')
      },
      {
        path: '/editor',
        name: 'editor',
        meta: {
          title: '富文本编辑器'
        },
        component: () => import('../../src/views/form/editor')
      },
      {
        path: '/upload',
        name: 'upload',
        meta: {
          title: '文件上传'
        },
        component: () => import('../../src/views/form/upload')
      },
      {
        path: '/charts',
        name: 'charts',
        meta: {
          title: 'schart图表'
        },
        component: () => import('../../src/views/charts/charts')
      },
      {
        path: '/drag',
        name: 'drag',
        meta: {
          title: '拖拽列表'
        },
        component: () => import('../../src/views/drag/drag')
      },
      {
        path: '/permission',
        name: 'permission',
        meta: {
          title: '权限测试'
        },
        component: () => import('../../src/views/permission/permission')
      }
    ]
  },
  {
    path: '/error_404',
    name: 'error_404',
    component: () => import('../../src/views/error_404/error_404')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../../src/views/login/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
