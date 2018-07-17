<template>
<div class="navigation">
  <div class="menu-switch">
    <!-- <span v-show="isCollapse">收起菜单</span> -->
    <el-switch v-model="isCollapse" active-color="#00ce9b" inactive-color="#909399"></el-switch>
  </div>
  <Menu :isCollapse="!isCollapse"></Menu>
</div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'SiderBar',
  components: {
    Menu
  },
  data () {
    return {
      isCollapse: true
    }
  }
}
</script>

<style>
.navigation,
.el-menu-vertical {
  height: 100%;
}

.navigation {
  border-right: 1px solid #ddd;
  background: #545c64;
}

.menu-switch {
  text-align: right;
  padding: 10px;
  color: #fff;
}

.menu-switch span {
  float: left;
}
</style>
