<template>
  <ul class="pag-box">
    <li :class="['num-box',current===1?'disabled':'']">
      <a class="num" :href="current===1?'javascript:return false;':`blog?page=${current-1}`">
        <i class="el-icon el-icon-arrow-left"></i>
      </a>
    </li>
    <li v-for="item in Math.ceil(total/pageSize)" :key="item" :class="['num-box',current===item?'active':'']">
      <a class="num" :href="`blog?page=${item}`+setParam()">{{item}}</a>
    </li>
    <li :class="['num-box',current===Math.ceil(total/pageSize)?'disabled':'']">
      <a class="num" :href="current===Math.ceil(total/pageSize)?'javascript:return false;':`blog?page=${current+1}`">
        <i class="el-icon el-icon-arrow-right"></i>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 20
    },
    pageSize: {
      type: Number,
      default: 8
    },
    current: {
      type: Number,
      default: 1
    }
  },
  methods: {
    setParam() {
      return this.$route.query.tagId ? `&tagId=${this.$route.query.tagId}` : "";
    }
  }
};
</script>
<style lang="scss" scoped>
.pag-box {
  padding: 2px 5px;
  white-space: nowrap;
  color: #303133;
  font-weight: 700;
  text-align: center;
  .num-box {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    min-width: 30px;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
  .num-box.active {
    background-color: #409eff;
    a {
      color: #fff;
    }
  }
  .num-box.disabled {
    a {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
</style>
