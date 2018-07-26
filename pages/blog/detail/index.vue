<template>
  <article class="essay-page">
    <topBar />
    <DetailHead :url="blog.imgUrl" :title="blog.title" />
    <ToolBar></ToolBar>
    <div class="container">
      <Atc :text="blog.content" />
    </div>
    <ReadMoreBtn></ReadMoreBtn>
  </article>
</template>
<script>
import topBar from "../components/topBar";
import DetailHead from "./components/detailHead";
import Atc from "./components/atc";
import ToolBar from "./components/toolBar";
import ReadMoreBtn from "./components/readMoreBtn";
import { $blogs } from "~/plugins/api";
export default {
  async asyncData({ query }) {
    const res = await $blogs.getBlogById(query.id);
    return {
      blog: res
    };
  },
  data() {
    return {
      blog: {}
    };
  },
  components: {
    topBar,
    Atc,
    DetailHead,
    ToolBar,
    ReadMoreBtn
  }
};
</script>
<style  scoped>
</style>

