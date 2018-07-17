<template>
<div id="app">
  <el-container>
    <!-- top -->
    <el-header id="top">
      <top></top>
    </el-header>
    <!-- top -->
    <el-container>
      <!-- siderbar -->
      <el-aside style="width: auto;">
        <SiderBar></SiderBar>
      </el-aside>
      <!-- siderbar -->
      <!-- main -->
      <el-main style="padding:0;">
        <Main></Main>
      </el-main>
      <!-- main -->
    </el-container>
  </el-container>
</div>
</template>

<script>
import Top from './views/layout/Top'
import SiderBar from './views/layout/SiderBar'
import Main from './views/layout/Main'
export default {
  name: 'App',
  components: {
    Top,
    SiderBar,
    Main
  }
}
</script>

<style>
@import './assets/common.css';
#app,
#app>.el-container {
  height: 100%;
}
#top{
      line-height: 58px;
      background: #00ce9b;
}
</style>
