<template>
  <div class="side-bar">
    <div class="side-bar-tag-group">
      <h3>分类:</h3>
      <div class="tag-box">
        <a class="side-bar-tag" v-for="item in tags" :key="item.id" :href="`blog?tagId=${item.id}`">
          <el-tag :color="item.bgColor" :style="{color:item.color}">{{item.name}}</el-tag>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tags: Array
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
      display: inline-block;
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
