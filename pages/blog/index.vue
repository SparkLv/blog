<template>
  <article>
    <Head :type="type" />
    <EssayBox :type="type" :blogs="blogs"></EssayBox>
  </article>
</template>
<script>
import Head from "./components/head";
import EssayBox from "./components/essayBox";
import { $blogs } from "~/plugins/api";

export default {
  layout:'blog',
  async asyncData({ query}) {
    let blogs = [];
    const res = await $blogs.getBlogs();
    return { type: query.type || "", blogs: res };
  },
  data() {
    return {
      type: "",
      blogs: []
    };
  },
  components: {
    Head,
    EssayBox
  },
  beforeRouteUpdate(to, from, next) {
    this.type = to.query.type;
    next();
  }
};
</script>
<style lang="scss" scoped>
</style>
