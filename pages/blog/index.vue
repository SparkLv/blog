<template>
  <article>
    <Head />
    <Content :tags="tags" :blogs="blogs" />
    <Pag :current="current" :total="total" />
  </article>
</template>
<script>
import Head from "./components/head";
import Content from "./components/content";
import { $blogs } from "~/plugins/api";
import { $tags } from "~/plugins/api";

export default {
  layout: "blog",
  async asyncData(context) {
    const query = context.query;
    const current = parseInt(query.page, 10) || 1;
    const params = {
      pageNum: current,
      pageSize: 8
    };
    if (query.tagId) {
      params.tagId = query.tagId;
    }
    const res = await $blogs.getBlogByPage(params);
    const res2 = await $tags.getAllTags();
    return { blogs: res.data, total: res.total, current ,tags:res2};
  },
  head() {
    return {
      title: "spark's blog",
      meta: [
        {
          hid: "description" + Math.random(),
          name: "description",
          content:
            "spark的个人博客，包括前端IT技术博客(js,css,html,node,react,vue等等)，金融股票学习笔记，一些自己的读书书籍感悟"
        },
        {
          hid: "keyword" + Math.random(),
          name: "keywords",
          content: "blog,博客,前端,金融,股票,书籍,文学,感悟,积累"
        }
      ]
    };
  },
  data() {
    return {
      tags:[],
      blogs: [],
      total: 0,
      current: 1
    };
  },
  components: {
    Head,
    Content
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
article {
  background: #f9f9f9;
}
</style>
