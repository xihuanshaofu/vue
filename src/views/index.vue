<template>
  <div id="content">
    <el-row id="headTitle">
      <el-col :span="4"></el-col>
      <el-col :span="20"></el-col>
    </el-row>
    <el-row class="tac">
      <el-col :span="4" style="height:595px;">
        <el-scrollbar id="menuScroll" style="height:100%;">
          <el-menu
            :default-active="menuDefaultActive"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            router
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="menuCollapse"
            style="height: 595px;text-align:left ;"
          >
            <el-menu-item index="/home">
              <i class="el-icon-document"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>统计表</span>
              </template>
              <el-menu-item-group>
                <template slot="title">休假信息统计表</template>
                <el-menu-item index="/about">调休信息统计表</el-menu-item>
                <el-menu-item index="/jhk">年假信息统计表</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">请假信息统计表</template>
                <el-menu-item index="2-1">缺勤月度登记表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-col>

      <el-col :span="20" style="height: 595px;">
        <el-scrollbar id="menuScroll" style="height:100%;">
          <indexTitle :indexTitleData="indexTitleData" @setIndexTitleData="setIndexTitleData"></indexTitle>
          <router-view></router-view>
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import indexTitle from "@/views/indexTitle.vue";
export default {
  name: "index",
  components: {
    indexTitle
  },
  data() {
    return {
      menuCollapse: false,
      indexTitleData: [],
      menuDefaultActive: ""
    };
  },
  mounted() {
    console.log(this.indexTitleData);
  },
  methods: {
    handleOpen: (key, keyPath) => {},
    handleClose(key, keyPath) {},
    routerPush: function(link) {
      for (let i = 0; i < this.indexTitleData.length; i++) {
        this.indexTitleData[i].statu = false;
      }
      var result = this.indexTitleData.some(function(item) {
        if (item.name == link.name) {
          item.statu = true;
          return true;
        } else {
          return false;
        }
      });
      if (result == false) {
        this.indexTitleData.push({
          name: link.name,
          path: link.path,
          statu: true
        });
      }
    },
    setIndexTitleData(index) {
      this.indexTitleData.splice(index, 1);
      if (this.indexTitleData.length === 1) {
        this.$router.push({
          path: "/home"
        });
      }
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        this.menuDefaultActive = val.path;
        this.routerPush(val);
      },
      // 深度观察监听
      deep: true,
      immediate: true
    }
  }
};
</script>

<style scoped="scoped">
：：.el-scrollbar__wrap {
  overflow-x: hidden;
}

#headTitle {
  background: #5bc0de;
  height: 45px;
  line-height: 45px;
  border-bottom: 2px solid #1b1818;
}
</style>
