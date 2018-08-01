<template>
<div class="menu">
  <!-- :router 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
  <el-menu class="el-menu-vertical" @select="handleSelect" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :default-active="activeIndex" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <!-- <el-submenu index="1">
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
    </el-submenu> -->
    <template v-for="obj in list">
        <el-menu-item :index="obj.path" v-on:click="addTabs(obj)">
          <i class="el-icon-menu"></i>
          <span slot="title">{{obj.title}}</span>
        </el-menu-item>
    </template>
  </el-menu>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
export default {
  name: 'Menu',
  props: {
    isCollapse: Boolean
  },
  created() {
    this.$store.dispatch('menus/getAllMenus')
  },
  computed: {
    ...mapState({
      list: state => state.menus.all
    }),
    activeIndex() {
      // console.log(this.$route)
      let arr = this.$route.fullPath.split('/')
      // console.log(arr[1])
      if (arr[1]) {
        return arr[1].toLowerCase()
      }
    }
  },
  methods: {
    ...mapActions('menus', [
      'addMenuToTabs'
    ]),
    addTabs(obj) {
      this.addMenuToTabs(obj)
      this.$router.replace(obj.path)
    },
    handleOpen(key, keyPath) {
      //console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      //console.log(key, keyPath)
    }
  }
}
</script>

<style>
.el-menu {
  border: none;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
