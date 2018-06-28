<template>
    <div class="box">
        <Tool></Tool>
        <MD @mdScroll="mdScroll" @getMd="getMd"></MD>
        <MDPre :top="top" :mdHTML="mdHTML"></MDPre>
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
  justify-content: space-between;
}
</style>
