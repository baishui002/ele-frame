<!--
 * @Author: 陈少泉
 * @Date: 2020-01-06 14:39:40
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-07 14:10:07
 * @Description: file content
 -->
<template>
  <el-aside width="200px" class="side-wrap">
    <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" :collapse="isCollapse" unique-opened router>
      <template v-for="item in menuList">
        <!-- 有2级菜单 -->
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item :index="citem.index" v-for="(citem, index) in item.subs" :key="index">{{citem.title}}</el-menu-item>
          </el-submenu>
        </template>
        <!-- 未含2级菜单 -->
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>

  </el-aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      isCollapse: false,
      menuList: [
        {
          icon: 'el-icon-setting',
          index: 'home',
          title: '首页'
        },
        {
          icon: 'el-icon-tickets',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'el-icon-message',
          index: 'tabs',
          title: 'tab选项卡'
        },
        {
          icon: 'el-icon-date',
          index: '3',
          title: '表单相关',
          subs: [
            {
              index: 'form',
              title: '基本表单'
            },
            {
              index: 'editor',
              title: '富文本编辑器'
            },
            {
              index: 'upload',
              title: '文件上传'
            }
          ]
        },
        {
          icon: 'el-icon-star-on',
          index: 'charts',
          title: 'schart图表'
        },
        {
          icon: 'el-icon-rank',
          index: 'drag',
          title: '拖拽列表'
        },
        {
          icon: 'el-icon-warning',
          index: 'permission',
          title: '权限测试'
        },
        {
          icon: 'el-icon-error',
          index: 'error_404',
          title: '404页面'
        }
      ],
      activeMenu: ''
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
      // this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.side-wrap {
  text-align: left;
}
.el-menu {
  height: 100%;
}
</style>
