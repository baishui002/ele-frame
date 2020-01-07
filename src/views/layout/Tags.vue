<!--
 * @Author: 陈少泉
 * @Date: 2020-01-06 14:40:09
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-07 18:04:22
 * @Description: file content
 -->
<template>
  <div class="tags-wrap">
    <el-tag
      :key="index"
      v-for="(item, index) in tagsList"
      closable
      class="tag"
      :class="{'active': $route.path === item.path}"
      :disable-transitions="false"
      @click="handleToPage(item)"
      @close="closeTags(index)"
    >{{ item.title }}</el-tag>
    <div class="drop-wrap">
      <el-dropdown @command="handleCommand">
        <el-button type="primary">
          更多菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="others">关闭其他</el-dropdown-item>
          <el-dropdown-item command="left">关闭左侧</el-dropdown-item>
          <el-dropdown-item command="right">关闭右侧</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  data () {
    return {
      TagList: [{ title: '标签一' }, { title: '标签二' }, { title: '标签三' }],
      inputVisible: false,
      inputValue: ''
    }
  },
  computed: {
    tagsList () {
      return this.$store.state.tagsList
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (newValue) {
        console.log(11, this.tagsList)
        console.log(this.$route)
        this.setTags(newValue)
      }
    }
  },
  mounted () {

  },
  methods: {
    // 设置标签
    setTags (route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.path
      })
      !isExist && this.tagsList.push({
        title: route.meta.title,
        path: route.path
        // name: route.matched[1].components.default.name
      })
      // bus.$emit('tags', this.tagsList)
      this.syncTagsList(this.tagsList)
    },

    // 关闭单个标签
    closeTags (index) {
      const delItem = this.tagsList.splice(index, 1)[0]
      this.syncTagsList(this.tagsList)

      const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1]
      if (item) {
        delItem.path === this.$route.path && this.$router.push(item.path)
      } else {
        this.$router.push('/')
      }
    },

    // 跳转
    handleToPage (route) {
      console.log(111, route)
      this.$route.push({ path: route.path })
    },

    // 关闭全部标签
    closeAll () {
      this.tagsList = []
      this.$router.push('/')
      this.syncTagsList(this.tagsList)
    },

    // 关闭其他标签
    closeOther () {
      const curItem = this.tagsList.filter(item => {
        return item.path === this.$route.path
      })
      this.tagsList = curItem
      this.syncTagsList(this.tagsList)
    },

    // 同步vuex和sessionStorage
    syncTagsList (tagsList) {
      this.$store.commit('setTagsList', tagsList)
      window.sessionStorage.setItem('tagsList', JSON.stringify(tagsList))
    },

    handleTags (command) {
      command === 'other' ? this.closeOther() : this.closeAll()
    },

    // tag下拉关闭
    handleCommand (command) {
      switch(command) {
        case 'other':
          this.handleCloseOther()
          break
        case 'all':
          this.handleCloseAll()
          break
        case 'left':
          this.handleCloseLeft()
          break
        case 'right':
          this.handleCloseRight()
          break
      }
    },
    handleCloseOther () {},
    handleCloseLeft () {},
    handleCloseRight () {},
    handleCloseAll () {},
  }
}
</script>

<style lang="scss" scoped>
.tags-wrap {
  padding: 5px;
  text-align: left;
  background: #eee;

  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .tag {
    background: #fff;
    color: #409eff;
    cursor: pointer;
    &.active {
      background: #409eff;
      color: #fff;
    }
  }
}
</style>
<style lang="css">
.tag.active .el-tag__close {
  color: #fff;
}
</style>
