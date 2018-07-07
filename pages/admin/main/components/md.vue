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
  flex: 2;
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
  border-right:15px solid #eee;
}
</style>
