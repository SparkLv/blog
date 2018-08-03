<template>
  <div class="md-pre-outerbox">
    <div style="height:50px;background:#ddd">
      <el-select style="margin-top:5px;width:250px" clearable v-model="nowBlog" @change="changeBlog">
        <el-option v-for="(item,index) in blogs" :key="index" :label="item.title" :value="index"></el-option>
      </el-select>
    </div>
    <div ref="prebox" class="md-prebox" v-html="mdHTML"></div>
  </div>
</template>
<script>
import hljs from "highlightjs";
import "highlightjs/styles/ocean.css";
export default {
  data() {
    return {
      nowBlog: ""
    };
  },
  props: {
    mdHTML: String,
    top: Number,
    blogs: Array
  },
  watch: {
    mdHTML() {
      setTimeout(() => {
        hljs.initHighlightingOnLoad();
        document.querySelectorAll("pre code").forEach(item => {
          hljs.highlightBlock(item);
        });
      }, 0);
    },
    top() {
      this.$refs["prebox"].scrollTop = this.top;
    }
  },
  methods: {
    changeBlog(index) {
      if (index || index == 0) {
        this.$emit("setBlog", this.blogs[index]);
      } else {
        this.$emit("setBlog", null);
      }
    }
  }
};
</script>
<style lang="css" scoped>
.md-pre-outerbox {
  flex: 1;
}
.md-prebox {
  font-family: "Menlo", "DejaVu Sans Mono", "Liberation Mono", "Consolas",
    "Ubuntu Mono", "Courier New", "andale mono", "lucida console", monospace;
  letter-spacing: 2px;
  width: 100%;
  min-height: 1000px;
  font-size: 16px;
  line-height: 20px;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  background: #fefefe;
}
.md-prebox >>> img {
  max-width: 100%;
}
</style>
