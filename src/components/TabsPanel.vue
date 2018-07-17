<template>
<div class="tabs-panel fix" v-show="list.length != 0">
  <div class="tabs-link" :class="{active: item.name == value}" v-for="item in list"><span @click="to" :path="item.path" :name="item.name">{{item.title}}</span><i @click="removeTab(item.name)" class="el-icon-close"></i></div>
</div>
</template>

<script>
export default {
  created() {
    const data = this.$data;
    console.log(data.value)
    for (var i = 0; i < data.list.length; i++) {
      if (data.list[i].name == data.value) {
        this.$router.push(data.list[i].path)
      }
    }
  },
  data() {
    return {
      value: '1',
      list: [{
        title: '空间列表',
        name: '1',
        path: '/space'
      }, {
        title: '空间详情',
        name: '2',
        path: '/space/detail/12'
      }]
    }
  },
  methods: {
    to(e) {
      this.value = e.currentTarget.getAttribute('name')
      this.$router.push(e.currentTarget.getAttribute('path'))
    },
    addTab(targetName) {
      this.list.push({
        title: '空间详情',
        name: '2',
        path: '/space/detail/12'
      })
      this.value = 2
    },
    removeTab(targetName) {
      let _this = this
      let tabs = this.list
      let activeName = this.value
      if (activeName === targetName) {
        let path = '';
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
              path = nextTab.path
            }
          }
        })
        this.$router.replace(path)
      }

      this.value = activeName
      this.list = tabs.filter(tab => tab.name !== targetName)
    }
  }
}
</script>

<style>
.tabs-panel {
  margin-left: -20px;
  margin-right: -20px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid #ddd;
}

.tabs-link {
  float: left;
  padding: 0 20px;
  border: 1px solid #ddd;
  margin-bottom: -1px;
  margin-left: -1px;
  font-size: 16px;
  cursor: pointer;
}

.tabs-link span {
  display: inline-block;
  line-height: 36px;
}

.tabs-link:first-child {
  border-radius: 4px 0 0 0;
}

.tabs-link:last-child {
  border-radius: 0 4px 0 0;
}

.tabs-link.active,
.tabs-link:hover {
  color: #409eff;
}

.tabs-link:hover {
  padding-left: 12px;
  padding-right: 11px;
}

.tabs-link:hover .el-icon-close {
  font-size: 10px;
  display: inline-block;
}

.el-icon-close {
  vertical-align: middle;
  display: none;
  margin-left: 5px;
  padding: 1px;
}

.el-icon-close:hover {
  border-radius: 50%;
  background-color: #ddd;
  color: #fff;
}

.tabs-link.active {
  border-bottom-color: #fff;
}
</style>
