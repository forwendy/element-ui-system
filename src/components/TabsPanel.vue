<template>
<div class="tabs-panel">
  <el-tabs v-if="editableTabs.length != 0" v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
    <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
      <el-tree :data="item.content" :props="item.defaultProps" @node-click="handleNodeClick"></el-tree>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
export default {
  data () {
    return {
      editableTabsValue: '1',
      editableTabs: [{
        title: '查看空间结构',
        name: '1',
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        content: [{
          id: 1,
          label: '创意天地北站',
          children: [{
            id: 4,
            label: '3楼',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '创意天地南站',
          children: [{
            id: 5,
            label: '3楼'
          }, {
            id: 6,
            label: '4楼',
            children: [{
              id: 9,
              label: '401'
            }, {
              id: 10,
              label: '402'
            }]
          }]
        }, {
          id: 3,
          label: '书城路站',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }]
      }],
      tabIndex: 2
    }
  },
  methods: {
    addTab (targetName) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue = newTabName
    },
    removeTab (targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>

<style>
.tabs-panel {
  height: 100%;
  border-right: 1px solid #ddd;
}

.el-tabs__header {
  padding-top: 20px;
}

.el-tabs__nav-scroll {
  padding: 0 15px;
}
</style>
