<template>
  <div class="box">
    <Tool :content="mdText"></Tool>
    <div class="md-box">
      <MD @mdScroll="mdScroll" @getMd="getMd"></MD>
      <MDPre :top="top" :mdHTML="mdHTML"></MDPre>
    </div>
  </div>
</template>
<script>
import Tool from "./components/tool";
import MD from "./components/md";
import MDPre from "./components/mdPre";
import marked from "marked";
export default {
  layout: "admin",
  data() {
    return {
      mdHTML: "",
      mdText: "",
      top: 0
    };
  },
  components: {
    Tool,
    MD,
    MDPre
  },
  methods: {
    getMd(text) {
      this.mdHTML = marked(text);
      this.mdText = text;
    },
    mdScroll(top) {
      this.top = top;
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
