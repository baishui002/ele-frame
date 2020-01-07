<!--
 * @Author: 陈少泉
 * @Date: 2020-01-06 14:38:10
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-07 11:38:44
 * @Description: file content
 -->
 <template>
   <!-- <div class="index">
     <Header></Header>
     <Sidebar></Sidebar>
     <div class="con-wrap">
       <Tags></Tags>
       <div class="content">
         <router-view></router-view>
       </div>
     </div>
   </div> -->

    <el-container class="container-wrap">
      <el-header class="header-wrap">
        <Header></Header>
      </el-header>
      <el-container>
        <Sidebar></Sidebar>
        <el-main class="content">
          <Tags></Tags>
          <router-view></router-view>
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
 .container-wrap {
   width: 100%;
   height: 100%;

  .el-header {
    padding: 0;
   }

  .content {
    padding: 0;
  }
 }

 </style>
