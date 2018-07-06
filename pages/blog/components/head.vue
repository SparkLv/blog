<template>
  <header class="header">
    <Logo class="logo"></Logo>
    <TopNav :type="type"></TopNav>
    <p :key="getBgText" :style="textStyle" class="title">
      <span v-for="item in getBgText" :Key="item">{{item}}</span>
    </p>
    <div :style="{transform:`translateY(${headMove})`}" class="bg-image-box">
      <img class="bg-image" :src="`http://ozgnrqjtt.bkt.clouddn.com/${getBgImg}.jpg`" alt="bg-image" />
    </div>
  </header>
</template>
<script>
import TopNav from "./topNav";
export default {
  data() {
    return {
      headMove: 0,
      textStyle: ""
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
          this.setTextStyle(10);
          return "TECHNOLOGY";
          break;
        case "finance":
          this.setTextStyle(7);
          return "FINANCE";
          break;
        case "thinking":
          this.setTextStyle(8);
          return "THINKING";
          break;
        default:
          this.setTextStyle(4);
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
        case "thinking":
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
    setTextStyle(num) {
      this.textStyle = `width: ${num}ch;animation: widthchange ${0.3*num}s steps(${num}), cursor ${0.3*num/6}s 6 forwards;`;
    },
    bgImgScroll() {
      this.headMove = document.documentElement.scrollTop + "px";
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

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 70px;
  // border-right: 5px solid #fff;
  line-height: 1;
  overflow: hidden;
}
</style>
