<template>
  <article>
    <Head :type="type" />
    <Content :blogs="blogs" />
    <Pag :current="current" :total="total" />
  </article>
</template>
<script>
import Head from "./components/head";
import Content from "./components/content";
import { $blogs } from "~/plugins/api";

export default {
  layout: "blog",
  // async asyncData({ query }) {
  //   let blogs = [];
  //   const res = await $blogs.getBlogs();
  //   return { type: query.type || "", blogs: res };
  // },
  data() {
    return {
      type: "",
      blogs: [],
      total: 0,
      current: 1
    };
  },
  components: {
    Head,
    Content
  },
  created() {
    this.getPageIndex();
  },
  mounted() {
    this.getBlogs(this.current);
  },
  methods: {
    async getBlogs(pageNum = 1, pageSize = 8) {
      const params = {
        pageNum,
        pageSize
      };
      if (this.$route.query.tagId) {
        params.tagId = this.$route.query.tagId;
      }
      const res = await $blogs.getBlogByPage(params);
      if (res) {
        this.blogs = res.data;
        this.total = res.total;
      }
    },
    getPageIndex() {
      this.current = parseInt(this.$route.query.page, 10) || 1;
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
