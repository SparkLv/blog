<template>
  <article class="blog-box">
    <div class="blog-box-head" :style="{backgroundImage:`url(${blog.imgUrl})`}">
      <span class="blog-title">{{blog.title}}</span>
    </div>
    <div class="blog-box-body">
      <div class="blog-tag-bar">
        <el-tag class="blog-tag" v-for="item in blog.tagsO" :style="{color:item.color}" :color="item.bgColor" :key="item.id">{{item.name}}</el-tag>
        <span class="blog-date">{{blog.updateTime}}</span>
      </div>
      <div class="blog-desc-box">
        <p class="blog-desc">{{blog.remark}}</p>
      </div>
      <div class="oper-box">
        <nuxt-link :to="`blog/detail?id=${blog.id}`">
          <el-button>
            open
          </el-button>
        </nuxt-link>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    blog: Object
  },
  mouted() {
    console.log(this.blog.imgUrl);
  }
};
</script>
<style lang="scss" scoped>
.blog-box {
  width: calc(50% - 40px);
  height: 450px;
  margin: 20px;
  float: left;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  .blog-box-head {
    height: 200px;
    width: 100%;
    background-size: cover;
    background-position: center center;
    text-align: center;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);
    }
    .blog-title {
      position: relative;
      display: inline-block;
      margin-top: 82px;
      font-size: 30px;
      font-weight: 600;
      color: #fff;
      z-index: 1;
    }
  }
  .blog-box-body {
    width: 100%;
    height: 250px;
    padding: 20px;
    box-sizing: border-box;
    .blog-tag-bar {
      height: 32px;
      .blog-tag {
        margin-right: 10px;
      }
      .blog-date {
        float: right;
        color: #888;
        line-height: 32px;
      }
    }
    .blog-desc-box {
      margin-top: 10px;
      height: 120px;
      width: 100%;
      overflow: hidden;
    }
    .oper-box {
      margin-top: 10px;
    }
  }
}
@media screen and(max-width:900px) {
  .blog-box {
    width: calc(100% - 40px);
  }
}
</style>
