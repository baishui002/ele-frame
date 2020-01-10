<!--
 * @Author: 陈少泉
 * @Date: 2020-01-06 14:52:42
 * @LastEditors  : 陈少泉
 * @LastEditTime : 2020-01-10 15:28:13
 * @Description: file content
 -->
<template>
  <div class="home">
    home
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  created () {
    // let obj = {
    //   name: 'baishui'
    // }
    // this.$axios.reqUserInfo(obj).then((res) => {
    //   console.log('reqUserInfo', res)
    // })

    let obj2 = {
      method: 'loginSystem',
      version: 0,
      userName: 'ad',
      pwd: 8888
    }
    this.$axios.musicDetails().then((res) => {
      console.log('musicDetails', res)
    }).catch(err => {
      console.log('err..:', err)
    })
    this.$axios.musicBroadcasting().then((res) => {
      console.log('musicBroadcasting', res)
    })
    setTimeout(() => {
      this.$axios.musicDetails(obj2).then((res) => {
        console.log('MobileServlet', res)
      }).catch(err => {
        console.log('err..333:', err)
      })
    }, 500)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
