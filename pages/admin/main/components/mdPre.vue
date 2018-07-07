<template>
    <div class="md-pre-outerbox">
        <div ref="prebox" class="md-prebox" v-html="mdHTML"></div>
    </div>
</template>
<script>
import hljs from "highlightjs";
import "highlightjs/styles/ocean.css";
export default {
  props: {
    mdHTML: String,
    top: Number
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
  }
};
</script>
<style lang="scss" scoped>
.md-pre-outerbox {
  flex: 3;
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
</style>
