<template>
  <article class="essay-page">
    <topBar />
    <DetailHead :url="blog.imgUrl" :title="blog.title" />
    <div class="container">
      <Atc :text="blog.content" />
    </div>
  </article>
</template>
<script>
import topBar from "../components/topBar";
import DetailHead from "./components/detailHead";
import Atc from "./components/atc";
import { $blogs } from "~/plugins/api";
export default {
  layout:'blog',
  async asyncData({ query }) {
    const res = await $blogs.getBlogById(query.id);
    return {
      blog: res
    };
  },
  head () {
    return {
      title: this.blog.title,
      meta: [
        { hid: 'description'+Math.random(), name: 'description', content: this.blog.remark},
        { hid: 'keyword'+Math.random(), name: 'keywords', content: this.blog.keyword },        
      ]
    }
  },
  data() {
    return {
      blog: {}
    };
  },
  components: {
    topBar,
    Atc,
    DetailHead
  }
};
</script>
<style  scoped>
</style>

