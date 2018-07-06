<template>
<div>
  <Breadcrumb></Breadcrumb>
  <SpaceFilter></SpaceFilter>
  <SpaceTable></SpaceTable>
</div>
</template>

<script>
import Breadcrumb from './Breadcrumb.vue'
import SpaceTable from './SpaceTable'
import SpaceFilter from './SpaceFilter'

export default {
  name: 'Space',
  components: {
    Breadcrumb,
    SpaceTable,
    SpaceFilter
  }
}
</script>

<style>
</style>
