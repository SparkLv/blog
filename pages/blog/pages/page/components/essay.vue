<template>
    <section class="essay">
        <div v-html="md"></div>
    </section>
</template>
<script>
import marked from "marked";
import hljs from "highlightjs";
import "highlightjs/styles/ocean.css";
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
.essay {
  font-family: "Menlo", "DejaVu Sans Mono", "Liberation Mono", "Consolas",
    "Ubuntu Mono", "Courier New", "andale mono", "lucida console", monospace;
  margin: 30px auto 50px;
  background: #fff;
  padding: 30px 80px;
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  width: 75%;
}

.essay >>> h1 {
  font-size: 40px;
  line-height: 55px;
  color: #c93c3e;
  text-transform: uppercase;
  font-family: "futura-pt", sans-serif;
  font-weight: 900;
  margin: 0 0 25px 0;
}

.essay >>> * {
  line-height: 28px;
  font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB",
    "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
}
</style>
