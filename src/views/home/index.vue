<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active" router>
      <van-tabbar-item icon="home-o" to="/index/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/index/find">找房</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/index/message"
        >咨询</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" to="/index/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: ''
    }
  }
}
</script>
<style lang="scss" scoped></style>
