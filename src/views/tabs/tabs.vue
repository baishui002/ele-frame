<!--
 * @Author: 陈少泉
 * @Date: 2020-01-07 13:59:04
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-10 15:53:35
 * @Description: file content
 -->
<template>
  <div>
    mockjs
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {

    }
  },
  created () {
    this.mockjs()
  },
  methods: {
    mockjs () {
      this.$axios.reqUserInfo().then((res) => {
        console.log('userInfo', res)
      }).catch(err => {
        console.log('err..:', err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .box {
    display: flex;
  }
</style>
