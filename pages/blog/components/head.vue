<template>
    <header class="header">
        <Logo @click="goHome" class="logo"></Logo>
        <TopNav :type="type"></TopNav>
        <span class="title">{{getBgText}}</span>
        <div :style="{transform:`translateY(${headMove})`}" class="bg-image-box">
            <img class="bg-image" :src="`${getBgImg}.jpg`" alt="bg-image" />
        </div>
    </header>
</template>
<script>
import TopNav from "./topNav";
export default {
  data() {
    return {
      headMove: 0
    };
  },
  props: {
    type: { type: String, default: "" }
  },
  components: {
    TopNav
  },
  computed: {
    getBgText() {
      switch (this.type) {
        case "tech":
          return "TECHNOLOGY";
          break;
        case "finance":
          return "FINANCE";
          break;
        case "literature":
          return "LITERATURE";
          break;
        default:
          return "BLOG";
      }
    },
    getBgImg() {
      switch (this.type) {
        case "tech":
          return "bg2";
          break;
        case "finance":
          return "bg3";
          break;
        case "literature":
          return "bg4";
          break;
        default:
          return "bg1";
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.bgImgScroll, false);
  },
  destroyed() {
    window.removeEventListener("scroll", this.bgImgScroll, false);
  },
  methods: {
    bgImgScroll() {
      this.headMove = document.documentElement.scrollTop + "px";
    },
    goHome() {
      document.location.href = "/blog";
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  .logo {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
    cursor: pointer;
  }
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 6rem;
  }
  .bg-image-box {
    position: relative;
    overflow: hidden;
    z-index: -1;
    .bg-image {
      width: 100%;
    }
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.35);
    }
  }
}
</style>
