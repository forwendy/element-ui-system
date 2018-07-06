<template>
<div class="space-breadcrumb">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/space/' }">空间管理</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/space/' }">空间列表</el-breadcrumb-item>
    <el-breadcrumb-item>空间详情</el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>

<script>
export default {
  name: 'SpaceDetail'
}
</script>

<style>
.space-breadcrumb{
    margin-bottom: 20px;
}
</style>
