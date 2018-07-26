<template>
  <article>
    <Head :type="type" />
    <Content :blogs="blogs" />
    <Bottom />
  </article>
</template>
<script>
import Head from "./components/head";
import Content from "./components/content";
import Bottom from "./components/bottom";
import { $blogs } from "~/plugins/api";

export default {
  // async asyncData({ query }) {
  //   let blogs = [];
  //   const res = await $blogs.getBlogs();
  //   return { type: query.type || "", blogs: res };
  // },
  data() {
    return {
      type: "",
      blogs: []
    };
  },
  components: {
    Head,
    Content,
    Bottom
  },
  mounted() {
    this.getBlogs();
  },
  methods: {
    async getBlogs() {
      const res = await $blogs.getBlogs();
      if (res) {
        this.blogs = res;
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.type = to.query.type || "";
    this.$refs["bgVideo"].load();
    next();
  }
};
</script>
<style lang="scss" scoped>
article {
  background: #f9f9f9;
}
</style>
