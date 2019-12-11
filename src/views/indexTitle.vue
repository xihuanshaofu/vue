<template>
  <div id="content">
    <div
      v-for="(item,index) in indexTitleData"
	  :key="index"
      class="tabs"
      :class="{tabsTrue:item.statu}"
    >
      <div class="closeTabs">
        <span class="closeSpan"  @click="setIndexTitleData(index)">x</span>
      </div>
      <div class="closeName"  @click="linkRouter(item.path)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexTitle",
  props: {
    indexTitleData: Array
  },
  data() {
    return {};
  },
  methods: {
    linkRouter: function(path) {
      this.$router.push({
        path: path
      });
	},
	setIndexTitleData(key){
		this.$store.dispatch("setTatus",789)
		this.$emit("setIndexTitleData",key)
	}
  }
};
</script>

<style scoped="scoped">
#content {
  width: 100%;
  height: 50px;
  text-align: left;
  background: #eeeeee;
}
.tabs {
  width: 80px;
  height: 40px;
  line-height: 20px;
  text-align: center;
  margin-left: 10px;
  margin-top: 10px;
  border: 1px solid #e5e5e5;
  border-bottom: 0;
  display: inline-block;
  background: #eeeeee;
}
.closeTabs {
  width: 80px;
  height: 10px;
  line-height: 10px;
  text-align: right;
  margin-top: 5px;
}
.closeSpan {
  text-align: center;
  margin-right: 10px;
}
.closeName {
  padding: 0 20px;
}
.tabsTrue {
  background: #ffffff;
}
</style>
