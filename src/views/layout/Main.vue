<template lang="html">
    <TabsPanel></TabsPanel>
</template>

<script>
import { mapState, mapActions, mapGetters} from 'vuex'
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
