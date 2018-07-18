<template>
  <article>
    <div class="bg-video-box">
      <video ref="bgVideo" class="bg-video" :poster="`http://blogcdn.sparklv.cn/blog_bg_poster_${type}.jpg`" autoplay loop muted>
        <source :src="`http://blogcdn.sparklv.cn/blog_bg_${type}.mp4`" type="video/mp4" />
      </video>
    </div>
    <Head :type="type" />
    <EssayBox :type="type" :blogs="blogs"></EssayBox>
  </article>
</template>
<script>
import Head from "./components/head";
import EssayBox from "./components/essayBox";
import { $blogs } from "~/plugins/api";

export default {
  layout: "blog",
  async asyncData({ query }) {
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
    this.type = to.query.type || "";
    this.$refs["bgVideo"].load();
    next();
  }
};
</script>
<style lang="scss" scoped>
.bg-video-box {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: -1;
}
.bg-video {
  min-width: 100%;
  min-height: 100vh;
  width: auto;
  height: auto;
}
</style>
