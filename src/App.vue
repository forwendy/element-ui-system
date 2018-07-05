<template>
<div id="app">
  <el-container>
    <el-header>
      <img src="./assets/logo.png" alt="ovu-logo" class="header-logo">
      <!-- 用户菜单 -->
      <UserMenu></UserMenu>
    </el-header>
    <el-container>
      <el-aside style="width: auto;">
        <!-- 主导航菜单 -->
        <Navigation></Navigation>
      </el-aside>
      <el-main style="padding:0;">
        <!-- 主内容区域 -->
        <el-container style="height: 100%;">
          <!-- tabs 标签页区域 - 可用于打开树型结构图 / 对比数据 -->
          <el-aside style="width: auto;height: 100%;">
              <TabsPanel></TabsPanel>
          </el-aside>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
import UserMenu from './components/UserMenu'
import Navigation from './components/Navigation'
import TabsPanel from './components/TabsPanel'
export default {
  name: 'App',
  components: {
    Navigation,
    UserMenu,
    TabsPanel
  }
}
</script>

<style>
@import './assets/common.css';
#app,
#app>.el-container {
  height: 100%;
}

.el-header {
  line-height: 58px;
  background: #00ce9b;
}

.header-logo {
  display: inline-block;
  vertical-align: middle;
  width: 200px;
}
</style>
