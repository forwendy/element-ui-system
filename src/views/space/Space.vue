<template>
    <div>
        <SpaceFilter></SpaceFilter>
        <SpaceTable></SpaceTable>
    </div>
</template>

<script>
import SpaceTable from './SpaceTable'
import SpaceFilter from './SpaceFilter'

export default {
  name: 'Space',
  components: {
    SpaceTable,
    SpaceFilter
  }
}
</script>

<style>
</style>
