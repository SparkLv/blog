<template>
  <div class="blog-head" :style="{backgroundImage:`url(${url})`}">
    <span class="blog-head-title">{{title}}</span>
  </div>
</template>
<script>
export default {
  props: {
    url: String,
    title: String
  }
};
</script>

<style lang="scss" scoped>
.blog-head {
  width: 100%;
  height: 450px;
  background-size: cover;
  background-position: center center;
  position: relative;
  text-align: center;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .blog-head-title {
    position: relative;
    color: #fff;
    top: 200px;
    z-index: 1;
    word-spacing: 5px;
    font-size: 40px;
    font-weight: 600;
  }
}
</style>
