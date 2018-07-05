<template>
  <div class="menu">
    <el-menu class="el-menu-vertical"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :router="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项4</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="space">
          <i class="el-icon-menu"></i>
          <span slot="title">空间管理</span>
      </el-menu-item>
      <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    isCollapse: Boolean
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.el-menu{
  border: none;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
