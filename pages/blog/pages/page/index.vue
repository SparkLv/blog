<template>
  <article class="essay-page">
    <ImgBox :url="blog.imgUrl"></ImgBox>
    <ToolBar></ToolBar>
    <div class="container">
      <Essay :text="blog.content"></Essay>
    </div>
    <ReadMoreBtn></ReadMoreBtn>
    <!-- <CommentBox></CommentBox> -->
  </article>
</template>
<script>
import Essay from "./components/essay";
import ImgBox from "./components/imgBox";
import ToolBar from "./components/toolBar";
import ReadMoreBtn from "./components/readMoreBtn";
import CommentBox from "./components/commentBox";
import axios from "axios";
import { $blogs } from "~/plugins/api";
export default {
  layout:'blog',
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
    Essay,
    ImgBox,
    ToolBar,
    ReadMoreBtn,
    CommentBox
  }
};
</script>
<style  scoped>
</style>

