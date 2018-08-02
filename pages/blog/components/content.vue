<template>
  <section class="content-box">
    <div class="blog-container">
      <BlogBoxNav :tags="tags" />
      <BlogBox v-for="item in blogs" :key="item.id" :blog="item" />
    </div>
    <SideBar :tags="tags" />
  </section>
</template>
<script>
import BlogBox from "./blogBox";
import SideBar from "./sideBar";
import BlogBoxNav from "./blogBoxNav";
export default {
  data() {
    return {};
  },
  props: {
    blogs: Array,
    tags: Array
  },
  components: {
    BlogBox,
    SideBar,
    BlogBoxNav
  }
};
</script>
<style lang="scss" scoped>
.content-box {
  min-height: 800px;
  max-width: 1200px;
  margin: 50px auto;
  display: flex;
  .blog-container {
    flex: 1;
    margin-top: -20px;
  }
}
</style>
