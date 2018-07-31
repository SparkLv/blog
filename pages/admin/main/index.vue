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
import { $users } from "~/plugins/api";
import axios from "axios";
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
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.validToken(token);
    } else {
      this.$router.push("/amdin");
    }
  },
  methods: {
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
