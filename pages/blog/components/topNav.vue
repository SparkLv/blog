<template>
    <nav class="top-nav">
        <ul v-if="!collapse">
            <li :class="type==='tech'?'active':''">
                <nuxt-link to="/blog?type=tech">Technology</nuxt-link>
            </li>
            <li :class="type==='finance'?'active':''">
                <nuxt-link to="/blog?type=finance">Finance</nuxt-link>
            </li>
            <li :class="type==='literature'?'active':''">
                <nuxt-link to="/blog?type=literature">Literature</nuxt-link>
            </li>
        </ul>
        <div v-else @click="showList=!showList" class="collapse-btn">
            <hr>
            <hr>
            <hr>
            <ul v-if="showList">
                <li :class="type==='tech'?'activeLi':''">
                    <nuxt-link to="/blog?type=tech">Technology</nuxt-link>
                </li>
                <li :class="type==='finance'?'activeLi':''">
                    <nuxt-link to="/blog?type=finance">Finance</nuxt-link>
                </li>
                <li :class="type==='literature'?'activeLi':''">
                    <nuxt-link to="/blog?type=literature">Literature</nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
  data() {
    return {
      showList: false,
      collapse: false
    };
  },
  props: {
    type: { type: String, default: "" }
  },
  mounted() {
    this.collapseNav();
    window.addEventListener("resize", this.collapseNav, false);
  },
  destroyed() {
    window.removeEventListener("resize", this.collapseNav, false);
  },
  methods: {
    collapseNav() {
      const width = document.documentElement.clientWidth;
      this.collapse = width < 800;
    }
  }
};
</script>
<style lang="scss" scoped>
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
.collapse-btn {
  position: relative;
  cursor: pointer;
  width: 30px;
  height: 30px;
  hr {
    line-height: 15px;
  }
  ul {
    position: absolute;
    background: #333;
    right: 0;
    z-index: 2;
    li {
      padding: 10px;
      width: 120px;
      text-align: right;
      border-bottom: 1px solid #aaa;
      margin:0;
      a {
        color: #fff;
        font-size: 16px;
      }
      &:hover {
        background: #fff;
        a {
          color: #333;
        }
      }
    }
  }
}
.activeLi {
  a {
    color: gold !important;
  }
}
</style>
