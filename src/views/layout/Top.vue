<template lang="html">
<div>
      <img src="@/assets/logo.png" alt="ovu-logo" class="header-logo">
      <!-- 用户菜单 -->
      <UserMenu></UserMenu>
</div>
</template>

<script>
import UserMenu from '@/components/UserMenu'
export default {
  created () {
    this.$api.get('/news', null, r => {
        console.log(r)
    })
  },
  name: 'Top',
  components: {
    UserMenu
  }
}
</script>

<style lang="css">
.header-logo {
  display: inline-block;
  vertical-align: middle;
  width: 200px;
}
</style>
