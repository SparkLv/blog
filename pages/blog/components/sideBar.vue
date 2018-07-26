<template>
  <div class="side-bar">
    <div class="side-bar-tag-group">
      <h3>分类:</h3>
      <div class="tag-box">
        <el-tag class="side-bar-tag" v-for="item in tags" :key="item.id" :color="item.bgColor" :style="{color:item.color}">{{item.name}}</el-tag>
      </div>
    </div>
  </div>
</template>
<script>
import { $tags } from "~/plugins/api";
export default {
  data() {
    return {
      tags: []
    };
  },
  created() {
    this.getTags();
  },
  methods: {
    async getTags() {
      const res = await $tags.getAllTags();
      if (res) {
        this.tags = res;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.side-bar {
  margin-left: 20px;
  width: 300px;
}
.side-bar-tag-group {
  background: #fff;
  box-shadow: 0px 4px 4px #ddd;
  h3 {
    margin: 0;
    background: #37bc9b;
    color: #fff;
    padding: 10px;
  }
  .tag-box {
    padding: 20px;
    .side-bar-tag {
      margin: 0 10px 10px 0;
      cursor: pointer;
    }
  }
}
@media screen and(max-width:1250px) {
  .side-bar {
    display: none;
  }
}
</style>
