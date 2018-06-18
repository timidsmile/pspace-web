<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1"><a href="/page/circle">我的圈子</a></el-menu-item>
    <el-menu-item index="2"><a href="/page/writeBlog">我的博客</a></el-menu-item>
    <el-menu-item index="3"><a href="/page/album">我的相册</a></el-menu-item>
    <el-submenu index="4">
      <template slot="title">用户中心</template>
      <el-menu-item index="4-1"><a href="/page/userDetail">个人信息</a></el-menu-item>
      <el-menu-item index="4-2">消息通知</el-menu-item>
      <el-menu-item index="4-3">登出</el-menu-item>
    </el-submenu>
  </el-menu>
</template>


<style scoped>
  a {
    text-decoration: none
  }
</style>


<script>
  export default {
    data() {
      return {};
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
