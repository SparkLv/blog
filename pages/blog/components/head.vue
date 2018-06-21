<template>
    <header class="header">
        <Logo @click="goHome" class="logo"></Logo>
        <nav class="top-nav">
            <ul>
                <li :class="type==='tech'?'active':''">
                    <nuxt-link to="/blog?type=tech">Technoledge</nuxt-link>
                </li>
                <li :class="type==='finance'?'active':''">
                    <nuxt-link to="/blog?type=finance">Finance</nuxt-link>
                </li>
                <li :class="type==='literature'?'active':''">
                    <nuxt-link to="/blog?type=literature">Literature</nuxt-link>
                </li>
            </ul>
        </nav>
        <span class="title">{{getBgText}}</span>
        <div :style="{transform:`translateY(${headMove})`}" class="bg-image-box">
            <img class="bg-image" :src="`${getBgImg}.jpg`" alt="bg-image" />
        </div>
    </header>
</template>
<script>
export default {
  data() {
    return {
      headMove: 0
    };
  },
  props: {
    type: { type: String, default: "" }
  },
  computed: {
    getBgText() {
      switch (this.type) {
        case "tech":
          return "TECHNOLEDGE";
          break;
        case "finance":
          return "FINANCE";
          break;
        case "literature":
          return "LITERATURE";
          break;
        default:
          return "BlOG";
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
  .top-nav {
    position: absolute;
    right: 20px;
    top: 20px;
    li {
      float: left;
      margin: 0 10px;
      padding-bottom: 8px;
      a {
        color: #eee;
        font-size: 18px;
      }
    }
    .active {
      border-bottom: 1px solid #fff;
    }
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
