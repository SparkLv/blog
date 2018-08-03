<template>
  <div class="md-outerbox">
    <div class="tool-bar">
      <UploadImg @change="insertImg" />
    </div>
    <textarea ref="input-box" @scroll="mdScroll" @input="runMd" v-model="mdText" class="md-box">
    </textarea>
  </div>
</template>
<script>
import marked from "marked";
import { $blogs } from "~/plugins/api";
import UploadImg from "./tools/upload";

export default {
  data() {
    return {
      mdText: ""
    };
  },
  props: {
    nowBlog: Object
  },
  components: {
    UploadImg
  },
  watch: {
    nowBlog() {
      this.mdText = this.nowBlog ? this.nowBlog.content : "";
      this.runMd();
    }
  },
  methods: {
    runMd() {
      this.$emit("getMd", this.mdText);
    },
    mdScroll(e) {
      this.$emit("mdScroll", e.target.scrollTop);
    },
    async insertImg(e) {
      const file = e.target.files[0];
      const fd = new FormData();
      fd.append("file", file);
      const res = await $blogs.upLoad(fd);
      const pos = this.$refs["input-box"].selectionStart;
      const s1 = this.mdText.slice(0, pos);
      const sl = this.mdText.length;
      const s2 = this.mdText.slice(pos, sl);
      this.mdText =
        s1 + `\n![${file.name}](http://blogcdn.sparklv.cn/${file.name})` + s2;
    }
  }
};
</script>
<style lang="scss" scoped>
.md-outerbox {
  flex: 1;
}
.md-box {
  font-family: "Menlo", "DejaVu Sans Mono", "Liberation Mono", "Consolas",
    "Ubuntu Mono", "Courier New", "andale mono", "lucida console", monospace;
  letter-spacing: 2px;
  width: 100%;
  min-height: 1000px;
  border: none;
  font-size: 16px;
  line-height: 20px;
  padding: 20px;
  box-sizing: border-box;
  resize: none;
  outline: none;
  overflow: auto;
  border-right: 15px solid #eee;
}
.tool-bar {
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  background: #ddd;
}
</style>
