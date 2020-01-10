<!--
 * @Author: 陈少泉
 * @Date: 2020-01-06 14:40:09
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-09 14:55:46
 * @Description: file content
 -->
<template>
  <div class="tags-wrap">
    <div>
      <span class="left" @click="handleTagMove('left')"><i class="el-icon-arrow-left" /></span>
      <div class="tags-box" >
        <div ref="tagsBox">
          <el-tag
            :key="index"
            v-for="(item, index) in tagsList"
            closable
            class="tag"
            :class="{'active': $route.path === item.path}"
            :disable-transitions="false"
            @click="handleToPage(item)"
            @close="closeTags(index)"
          >
            {{ item.title }}
          </el-tag>
        </div>
      </div>
      <span class="right" @click="handleTagMove('right')"><i class="el-icon-arrow-right" /></span>
    </div>

    <div class="drop-wrap">
      <el-dropdown @command="handleCommand" style="width: 100%">
        <el-button type="primary" size="small">
          关闭
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="left">关闭左侧</el-dropdown-item>
          <el-dropdown-item command="right">关闭右侧</el-dropdown-item>
          <el-dropdown-item command="others">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { getStyle } from '@/libs/tools'
export default {
  name: 'Tags',
  data () {
    return {
      TagList: [{ title: '标签一' }],
      // tagsList: [
      //   { title: '标签一' },
      //   { title: '标签一2' },
      //   { title: '标签一' },
      //   { title: '标签一2' },
      //   { title: '标签一' },
      //   { title: '标签一2' },
      //   { title: '标签一' },
      //   { title: '标签一2' },
      //   { title: '标签一' },
      //   { title: '标签一2' },
      //   { title: '标签一' },
      //   { title: '标签一2' },
      //   { title: '标签一' },
      //   { title: '标签一2' },
      //   { title: '标签一' },
      //   { title: '标签一2' },
      //   { title: '标签一' },
      //   { title: '标签一2' }
      // ],
      left: 0,
      ulWidth: 0
    }
  },
  computed: {
    tagsList () {
      return this.$store.state.tagsList
    },
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },

  watch: {
    $route: {
      immediate: true,
      handler (newValue) {
        // console.log(11, this.tagsList)
        // console.log(this.$route)
        this.setTags(newValue)
      }
    },
    isCollapse () {
      // this.$nextTick(() => {
      //   let ulWidth = this.$refs.tagsBox.offsetWidth
      //   console.log(this.left)
      //   console.log(ulWidth, this.ulWidth)
      // })
      // setTimeout(() => {
      //   if (this.isCollapse) {
      //     console.log(3)
      //     let ulWidth = this.$refs.tagsBox.offsetWidth
      //     let width = this.left + ulWidth - this.ulWidth
      //     console.log(this.left, width)
      //     console.log(ulWidth, this.ulWidth)
      //     this.$refs.tagsBox.style.transform = `translateX(${width}px)`
      //   }
      // }, 500)
    }
  },
  mounted () {
    this.$store.commit('setTagsList', this.TagList)
  },
  methods: {
    // 设置标签
    setTags (route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.path
      })
      !isExist && this.tagsList.unshift({
        title: route.meta.title,
        path: route.path
        // name: route.matched[1].components.default.name
      }) && this.syncTagsList(this.tagsList)
      // bus.$emit('tags', this.tagsList)
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
      this.$router.push({ path: route.path })
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

    // 左右滑动
    handleTagMove (move) {
      if (move === 'left') {
        this.left = 0
        this.$refs.tagsBox.style.transform = `translateX(${this.left}px)`
      } else {
        let ul = this.$refs.tagsBox
        // let ulWidth = ul.offsetWidth
        this.ulWidth = ul.offsetWidth
        let spanWidthSum = 0

        ul.childNodes.forEach(item => {
          // spanWidthSum += Number(getStyle(item, 'width').replace('px', '')) + parseInt(getStyle(item, 'marginLeft'))
          spanWidthSum += item.offsetWidth + parseInt(getStyle(item, 'marginLeft'))
        })
        // this.width = spanWidthSum
        // span宽度总和大于父元素宽度时，才能向左移动
        if (this.ulWidth > spanWidthSum) return
        this.left = this.ulWidth - spanWidthSum
        this.$refs.tagsBox.style.transform = `translateX(${this.left}px)`
      }
    },
    // tag下拉关闭
    handleCommand (command) {
      switch (command) {
        case 'others':
          this.handleCloseOther()
          break
        case 'all':
          this.handleCloseAll()
          break
        case 'left':
          this.handleCloseLeftOfRight(command)
          break
        case 'right':
          this.handleCloseLeftOfRight(command)
          break
      }
    },
    handleCloseOther () {
      let obj = {
        title: this.$route.meta.title,
        path: this.$route.path
      }
      this.syncTagsList([obj])
    },
    handleCloseLeftOfRight (command) {
      let flag = command !== 'left'
      let path = this.$route.path
      let tagsList = this.tagsList.filter(item => {
        if (item.path === path) {
          flag = !flag
          return true
        }
        return flag
      })
      this.syncTagsList(tagsList)
    },

    handleCloseAll () {
      this.syncTagsList([])
      this.$router.replace({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.tags-wrap {
  position: relative;
  padding: 5px;
  text-align: left;
  background: #eee;

  > div {
    display: flex;
    align-items: center;
    width: calc(100% - 100px);

    .left {
       cursor: pointer;
      margin-right: 10px;
    }
    .right {
       cursor: pointer;
      margin-left: 10px;
    }
  }
  .tags-box {
    width: calc(100% - 40px);
    overflow: hidden;

    > div {
      white-space: nowrap;
      transition: all 1s;
    }
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .tag {
    background: #fff;
    color: #409eff;
    cursor: pointer;
    &:hover {
      background: #409eff;
      color: #fff;
      opacity: .7;
    }
    &.active {
      background: #409eff;
      color: #fff;
    }
  }
  .drop-wrap {
    position: absolute;
    right: 0;
    top: 50%;
    padding: 0 5px 0 10px;
    width: 80px;
    transform: translateY(-50%);
    background: #eee;
  }
}
</style>
<style lang="css">
.tag.active .el-tag__close {
  color: #fff;
}
</style>
