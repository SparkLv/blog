<template>
  <div class="box">
    <Tool :nowBlog="nowBlog" :content="mdText"></Tool>
    <div class="md-box">
      <MD :nowBlog="nowBlog" @mdScroll="mdScroll" @getMd="getMd"></MD>
      <MDPre @setBlog="setBlog" :blogs="blogs" :top="top" :mdHTML="mdHTML"></MDPre>
    </div>
  </div>
</template>
<script>
import Tool from "./components/tool";
import MD from "./components/md";
import MDPre from "./components/mdPre";
import marked from "marked";
import { $users } from "~/plugins/api";
import { $blogs } from "~/plugins/api";
import axios from "axios";
export default {
  layout: "admin",
  data() {
    return {
      mdHTML: "",
      mdText: "",
      top: 0,
      blogs: [],
      nowBlog: null
    };
  },
  components: {
    Tool,
    MD,
    MDPre
  },
  created() {
    this.getBlogs();
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.validToken(token);
    } else {
      this.$router.push("/amdin");
    }
  },
  methods: {
    async getBlogs() {
      const res = await $blogs.getBlogs();
      this.blogs = res;
    },
    setBlog(blog) {
      this.nowBlog = blog;
    },
    getMd(text) {
      this.mdHTML = marked(text);
      this.mdText = text;
    },
    mdScroll(top) {
      this.top = top;
    },
    async validToken(token) {
      const res = await $users.validToken();
      if (res.code != 1) {
        this.$message({
          type: "warning",
          message: res.message
        });
        this.$router.push("/admin");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
}
.md-box {
  display: flex;
}
</style>
