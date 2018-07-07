<template>
  <div class="box">
    <a :href="`/blog/pages/page?id=${blog.id}`">
      <div class="img" :style="`background: url(${blog.imgUrl}) center/cover;`"></div>
    </a>
    <div class="content">
      <header class="head">
        <h3>
          <a href="/blog/pages/page">{{blog.title}}</a>
        </h3>
      </header>
      <section class="desc">{{blog.remark}}</section>
      <footer class="foot">
        <span class="date">{{blog.updateTime}}</span>
        <div class="tag-group">
          <el-tag v-for="item in blog.tagsObj" :key="item.name" :style="{margin:'0 4px',cursor:'pointer',color:item.color,backgroundColor:item.bgColor}">{{item.name}}</el-tag>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import Tag from "./tag";
export default {
  data() {
    return {
      tagArr: []
    };
  },
  props: {
    blog: Object
  },
  components: {
    Tag
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/common/styles/libary.scss";

$essay-box-width: 370px !default;

.box {
  width: $essay-box-width;
  height: 400px;
  display: flex;
  border-radius: 4px 4px 0 0;
  margin: 10px;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  .img {
    width: 100%;
    height: 180px;
    cursor: pointer;
  }
  .content {
    border: 1px solid #f4f4f4;
    border-top: none;
    height: 220px;
    box-sizing: border-box;
    padding: 0 10px;
    .head {
      height: 40px;
      h3 {
        font-size: 1.2rem;
        width: 100%;
        @extend %overflow-ellipsis;
        a {
          color: #000;
        }
      }
    }
    .desc {
      font-size: 13px;
      color: #8a8a8a;
      line-height: 24px;
      height: 125px;
    }
    .foot {
      display: flex;
      justify-content: space-between;
      .date {
        font-size: 14px;
        line-height: 28px;
      }
      .tag-group {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .box {
    width: 80%;
  }
}
</style>
