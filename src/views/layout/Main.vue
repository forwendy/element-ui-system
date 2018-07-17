<template lang="html">
    <!-- 主内容区域 -->
    <el-container style="height: 100%;" class="main">
      <el-header style="height: auto;">
          <TabsPanel></TabsPanel>
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
</template>

<script>
import Home from '@/views/Home'
import TabsPanel from '@/components/TabsPanel'
export default {
  name: 'Main',
  components: {
    Home,
    TabsPanel
  }
}
</script>

<style lang="css">
</style>
