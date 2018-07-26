<template>
  <section class="essay">
    <div v-html="md"></div>
  </section>
</template>
<script>
import marked from "marked";
import hljs from "highlightjs";
import "highlightjs/styles/github.css";
export default {
  data() {
    return {
      md: ""
    };
  },
  props: {
    text: String
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.md = marked(this.text);
      setTimeout(() => {
        hljs.initHighlightingOnLoad();
        document.querySelectorAll("pre code").forEach(item => {
          hljs.highlightBlock(item);
        });
      }, 0);
    }
  }
};
</script>
<style scoped>
* >>> .hljs {
  border: 1px solid #d0cdc7;
}
.essay {
  font-family: "Menlo", "DejaVu Sans Mono", "Liberation Mono", "Consolas",
    "Ubuntu Mono", "Courier New", "andale mono", "lucida console", monospace;
  margin: 30px auto 50px;
  background: #fff;
  padding: 30px 80px;
  width: 75%;
  box-sizing: border-box;
  overflow: auto;
}

.essay >>> * {
  line-height: 28px;
  font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB",
    "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
}
@media screen and (max-width: 900px) {
  .essay {
    width: 90%;
    padding: 30px 20px;
  }
}
</style>
