<!--
 * @Author: 陈少泉
 * @Date: 2020-01-06 14:39:06
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-10 16:04:07
 * @Description: file content
 -->
<template>
  <div class="header-wrap">
    <el-row>
      <el-col :span="12" class="left">
        <i class="el-icon-menu" @click="handleToIsCollapse" />
        <span>CMDB管理系统</span>
      </el-col>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
// import bus from '@/components/common/bus'
export default {
  name: 'Header',
  data () {
    return {
      // isCollapse: false
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    handleToIsCollapse () {
      this.$store.commit('setIsCollapse', !this.isCollapse)
      // bus.$emit('collapse', this.isCollapse)
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap {
  height: 60px;
  background: #242f42;

  .left {
    color: #fff;
    line-height: 60px;
    font-size: 24px;

    i {
      padding: 0 20px;
    }
  }
}
</style>
