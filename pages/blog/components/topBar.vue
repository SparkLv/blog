<template>
  <nav :class="['top-bar',fill?'fill':'']">
    <span class="logo">
      <img src="/blog_logo.png" width="200" alt="logo">
    </span>
    <ul class="nav-list">
      <!-- <li>111</li>
      <li>222</li>
      <li>333</li> -->
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      fill: false
    };
  },
  props: {},
  mounted() {
    window.addEventListener("scroll", this.fillBar, false);
  },
  destroyed() {
    window.removeEventListener("scroll", this.fillBar, false);
  },
  methods: {
    fillBar() {
      const top = document.documentElement.scrollTop;
      this.fill = top > 50;
    }
  }
};
</script>
<style lang="scss" scoped>
.top-bar {
  height: 59px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all .5s;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  .nav-list {
    li {
      float: left;
      margin: 0 10px;
    }
  }
}
.fill {
  background: #fff;
  box-shadow: 0 2px 2px #d7d7d7;
}
</style>
