<template>
<div class="user-menu">
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <el-badge :value="120" :max="99">
        <div class="user-pic"><img src="@/assets/headpic.jpg"></div>
      </el-badge>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
          系统消息
        <el-badge :value="120" :max="99">
        </el-badge>
      </el-dropdown-item>
      <el-dropdown-item>
         修改密码
      </el-dropdown-item>
      <el-dropdown-item>
        退出登录
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>

<script>
export default {
  name: 'UserMenu'
}
</script>

<style>
.user-menu {
  display: inline-block;
  float: right;
  padding-right: 20px;
}

.el-dropdown {
  cursor: pointer;
}

.user-pic {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
}

.user-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
