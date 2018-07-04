<template>
  <article class="essay-page">
    <ImgBox :url="blog.imgUrl"></ImgBox>
    <ToolBar></ToolBar>
    <div class="container">
      <Essay :text="blog.content"></Essay>
      <!-- <AsideNav></AsideNav> -->
    </div>
    <ReadMoreBtn></ReadMoreBtn>
  </article>
</template>
<script>
import Essay from "./components/essay";
import ImgBox from "./components/imgBox";
import ToolBar from "./components/toolBar";
import AsideNav from "./components/asideNav";
import ReadMoreBtn from "./components/readMoreBtn";
import axios from "axios";
import { $blogs } from "~/plugins/api";
export default {
  async asyncData({ query }) {
    const res = await $blogs.getBlogById(query.id);
    console.log('sss');
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
    Essay,
    AsideNav,
    ImgBox,
    ToolBar,
    ReadMoreBtn
  }
};
</script>
<style  scoped>
</style>

