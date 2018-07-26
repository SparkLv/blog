<template>
    <section class="content-box">
        <div class="blog-container">
            <BlogBox v-for="item in blogs" :key="item.id" :blog="item" />
        </div>
        <SideBar />
    </section>
</template>
<script>
import BlogBox from "./blogBox";
import SideBar from "./sideBar";
export default {
  components: {
    BlogBox,
    SideBar
  },
  props: {
    blogs: Array
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
