<template>
<!-- 主内容区域 -->
<el-container style="height: 100%;" class="main">
  <el-header style="height: auto;">
    <div class="tabs-panel fix" v-show="list.length != 0">
      <div class="tabs-link" :class="{active: item.id == showId}" v-for="item in list">
        <span @click="to" :path="item.path" :id="item.id">{{item.title}}</span>
        <i @click="removeTab(item.id)" class="el-icon-close"></i>
      </div>
    </div>
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations
} from 'vuex'
export default {
  created() {
    // const data = this.$data;
    // for (var i = 0; i < data.list.length; i++) {
    //   if (data.list[i].name == data.showId) {
    //     this.$router.push(data.list[i].path)
    //   }
    // }
  },
  props: {

  },
  data() {
    return {
      // showId: '1',
      // list: [{
      //   title: '空间列表',
      //   id: '1',
      //   path: '/space'
      // }, {
      //   title: '空间详情',
      //   id: '2',
      //   path: '/space/detail/12'
      // }]
    }
  },
  computed: {
    ...mapGetters({
        list:  'tabs/getTabs'
    }),
    showId() {
      // 根据路由规则获取
      const path = this.$route.path.split('/')[1]
      const item = this.list.find(item => item.path === path)
      if (!item && this.list.length != 0) {
        this.$router.replace(this.list[0].path)
        return this.list[0].id
      } else {
        return item.id
      }
    }
  },
  methods: {
    ...mapMutations('tabs', [
      'removeItem'
    ]),
    to(e) {
      this.$router.replace(e.currentTarget.getAttribute('path'))
    },
    removeTab(id) {
      this.removeItem(id)
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

.tabs-link:first-child:last-child {
  border-radius: 4px 4px 0 0;
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
