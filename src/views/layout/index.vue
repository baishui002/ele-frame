<!--
 * @Author: 陈少泉
 * @Date: 2020-01-06 14:38:10
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-10 16:14:24
 * @Description: file content
 -->
 <template>
    <el-container style="height: 100%">
      <el-header style="padding: 0">
        <Header></Header>
      </el-header>
      <el-container style="height: 100%">
        <Sidebar />
        <el-main class="content">
          <Tags></Tags>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
 </template>

<script>
import Header from './Header'
import Sidebar from './Sidebar'
import Tags from './Tags'
export default {
  name: 'index',
  components: {
    Header,
    Sidebar,
    Tags
  }
}
</script>

 <style lang="scss" scoped>
  .content {
    padding: 0;
  }
  /* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
 </style>
