<template>
  <div class="md-outerbox">
    <textarea @scroll="mdScroll" @input="runMd" v-model="mdText" class="md-box">
    </textarea>
  </div>
</template>
<script>
import marked from "marked";
export default {
  data() {
    return {
      mdText: ""
    };
  },
  props: {
    nowBlog: Object,
    imgMdText: String
  },
  watch: {
    nowBlog() {
      this.mdText = this.nowBlog ? this.nowBlog.content : "";
      this.runMd();
    },
    imgMdText() {
      this.mdText = this.imgMdText;
    }
  },
  methods: {
    runMd() {
      this.$emit("getMd", this.mdText);
    },
    mdScroll(e) {
      this.$emit("mdScroll", e.target.scrollTop);
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
  height: calc(100vh - 115px);
  border: none;
  font-size: 16px;
  line-height: 20px;
  padding: 20px;
  box-sizing: border-box;
  resize: none;
  outline: none;
  overflow: auto;
  border-right: 3px solid #eee;
}
.upload-btn {
  position: absolute;
  top: -45px;
  left: 10px;
}
</style>
