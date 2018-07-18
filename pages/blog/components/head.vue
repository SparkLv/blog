<template>
  <header class="header">
    <nav class="top-nav">
      <Logo />
      <TopNav :type="type"></TopNav>
      <div :class="'top-nav-bg '+(scrollTop>(wHeight-50)?'top-nav-to-right':'top-nav-to-left')"></div>
    </nav>
    <div @click="moveToCon" class="arrow-bottom"></div>
  </header>
</template>
<script>
import TopNav from "./topNav";
export default {
  data() {
    return {
      textStyle: "",
      scrollTop: 0,
      wHeight: 0,
      bgImgArr: ["", "tech", "finance", "thinking"]
    };
  },
  props: {
    type: { type: String, default: "" }
  },
  components: {
    TopNav
  },
  mounted() {
    window.addEventListener("scroll", this.bgImgScroll, false);
    this.wHeight = document.documentElement.clientHeight;
  },
  destroyed() {
    window.removeEventListener("scroll", this.bgImgScroll, false);
  },
  methods: {
    bgImgScroll() {
      this.scrollTop = document.documentElement.scrollTop;
    },
    moveToCon() {
      const step = this.wHeight / 20;
      const timeInter = Math.floor(1000 / step);
      this.moveTimeout = setInterval(() => {
        if (document.documentElement.scrollTop < this.wHeight) {
          document.documentElement.scrollTop += step;
        } else {
          clearInterval(this.moveTimeout);
        }
      }, timeInter);
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes tobottom {
  from {
    bottom: 80px;
  }
  to {
    bottom: 60px;
  }
}
.header {
  position: relative;
  height: 100vh;
  .top-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 60px;
  }
  .top-nav-bg {
    position: absolute;
    width: 200%;
    top: 0;
    left: 0;
    height: 60px;
    background: linear-gradient(90deg, transparent 50%,#F8F8FF 0);
    z-index: -1;
    transition: 0.5s all;
  }
  .top-nav-to-left {
    left: 0;
  }
  .top-nav-to-right {
    left: -100%;
  }
  .bg-image-box {
    margin-top: 60px;
    position: relative;
    overflow: hidden;
    z-index: -1;
    .bg-image {
      transition: 2.5s opacity;
    }
    .bg-show {
      width: 100%;
      opacity: 1;
    }
    .bg-hidden {
      width: 0;
      opacity: 0;
    }
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.15);
    }
  }
  .arrow-bottom {
    position: absolute;
    cursor: pointer;
    left: 50%;
    bottom: 80px;
    width: 40px;
    height: 40px;
    border-left: 5px solid #fff;
    border-top: 5px solid #fff;
    transform: translateX(-50%) rotate(-135deg);
    animation: tobottom 1s infinite alternate ease-in-out;
  }
}
</style>
