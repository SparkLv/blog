<template>
  <div class="box">
    <Tool :nowBlog="nowBlog" :content="mdText"></Tool>
    <div class="tool-bar">
      <UploadImg class="upload-btn" @change="insertImg" />
    </div>
    <div class="md-box">
      <MD ref="input-box" :nowBlog="nowBlog" @mdScroll="mdScroll" :imgMdText="imgMdText" @getMd="getMd"></MD>
      <MDPre @setBlog="setBlog" :blogs="blogs" :top="top" :mdHTML="mdHTML"></MDPre>
    </div>
  </div>
</template>
<script>
import Tool from "./components/tool";
import MD from "./components/md";
import MDPre from "./components/mdPre";
import marked from "marked";
import UploadImg from "./components/tools/upload";
import { $users } from "~/plugins/api";
import { $blogs } from "~/plugins/api";
import axios from "axios";
export default {
  layout: "admin",
  data() {
    return {
      mdHTML: "",
      mdText: "",
      imgMdText: "",
      top: 0,
      blogs: [],
      nowBlog: null
    };
  },
  components: {
    Tool,
    MD,
    MDPre,
    UploadImg
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
    },
    async insertImg(e) {
      const file = e.target.files[0];
      const fd = new FormData();
      fd.append("file", file);
      const res = await $blogs.upLoad(fd);
      const pos = this.$refs["input-box"].$el.firstChild.selectionStart;
      const s1 = this.mdText.slice(0, pos);
      const sl = this.mdText.length;
      const s2 = this.mdText.slice(pos, sl);
      this.mdText =
        s1 + `\n![${file.name}](http://blogcdn.sparklv.cn/${file.name})` + s2;
      this.imgMdText = this.mdText;
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
.tool-bar {
  height: 50px;
  border-bottom: 1px solid #ddd;
}
.upload-btn{
  margin-top:5px;
  margin-left:10px;
}
</style>
