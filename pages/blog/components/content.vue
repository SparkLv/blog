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
import { $tags } from "~/plugins/api";
export default {
  data() {
    return {
      tags: []
    };
  },
  props: {
    blogs: Array
  },
  components: {
    BlogBox,
    SideBar,
    BlogBoxNav
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
