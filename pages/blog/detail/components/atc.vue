<template>
  <section class="essay">
    <div class="oper-bar">
      <nuxt-link class="back-btn" to="/blog">
        <el-button type="text">
          ← Back To Blog Home
        </el-button>
      </nuxt-link>
      <div @click="hasGoodType?false:setGood(false)" :class="{bad:true,['good-dis']:hasGoodType==1,['bad-active']:hasGoodType==2}">
        <i class="iconfont icon-bad"></i>
      </div>
      <div @click="hasGoodType?false:setGood(true)" :class="{good:true,['good-dis']:hasGoodType==2,['good-active']:hasGoodType==1}">
        <i class="iconfont icon-zan1"></i>
      </div>
      <div class="watch">
        <i class="iconfont icon-eye"></i>
        <span>{{watchNum}}</span>
      </div>
    </div>
    <div :class="!full?'hide-full':''" v-html="md"></div>
    <div v-if="!full" class="open-all-btn">
      <el-button type="text" style="font-size:18px" @click="showAll">查看全部>>></el-button>
    </div>
  </section>
</template>
<script>
import marked from "marked";
import hljs from "highlightjs";
import "highlightjs/styles/github.css";
import { $blogs } from "~/plugins/api";

export default {
  data() {
    return {
      md: "",
      watchNum: 0,
      hasGoodType: false,
      full: false
    };
  },
  props: {
    text: String
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.md = marked(this.text);
      setTimeout(() => {
        hljs.initHighlightingOnLoad();
        document.querySelectorAll("pre code").forEach(item => {
          hljs.highlightBlock(item);
        });
      }, 0);
      this.getWatch();
      this.setWatch();
      this.judgeGood();
    },
    async getWatch() {
      const res = await $blogs.getWatch(this.$route.query.id);
      if (res) {
        this.watchNum = res.length ? res[0].num : 0;
      }
    },
    setWatch() {
      $blogs.setWatch(this.$route.query.id);
    },
    judgeGood() {
      let typeObj = localStorage.getItem("goodType");
      if (typeObj) {
        typeObj = JSON.parse(typeObj);
        if (typeObj[this.$route.query.id]) {
          this.hasGoodType = typeObj[this.$route.query.id];
        } else {
          this.hasGoodType = false;
        }
      } else {
        this.hasGoodType = false;
      }
    },
    async setGood(type) {
      const res = await $blogs.setGood(this.$route.query.id, { type });
      if (res) {
        const ltype = type ? 1 : 2;
        if (localStorage.getItem("goodType")) {
          const obj = JSON.parse(localStorage.getItem("goodType"));
          obj[this.$route.query.id] = ltype;
          localStorage.setItem("goodType", JSON.stringify(obj));
        } else {
          localStorage.setItem(
            "goodType",
            JSON.stringify({ [this.$route.query.id]: ltype })
          );
        }
      }
      this.judgeGood();
    },
    showAll() {
      this.full = true;
    }
  }
};
</script>
<style scoped>
.oper-bar {
  margin-bottom: 30px;
}
.oper-bar .el-button {
  font-size: 18px;
}

.watch {
  float: right;
  display: flex;
  align-items: center;
}

.watch > i {
  color: #606060;
  font-size: 30px;
  margin-right: 5px;
}
.watch > span {
  color: #707070;
}
.good,
.bad {
  float: right;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.good > i {
  color: #333;
  font-size: 30px !important;
  cursor: pointer;
}
.bad > i {
  color: #333;
  font-size: 30px !important;
  cursor: pointer;
}
.good-dis > i {
  color: #eee;
  cursor: not-allowed;
}

.bad-active > i {
  color: #d33621;
  cursor: not-allowed;
}

.good-active > i {
  color: #ffb600;
  cursor: not-allowed;
}
* >>> .hljs {
  border: 1px solid #d0cdc7;
}
.essay {
  font-family: "Menlo", "DejaVu Sans Mono", "Liberation Mono", "Consolas",
    "Ubuntu Mono", "Courier New", "andale mono", "lucida console", monospace;
  margin: 30px auto 50px;
  background: #fff;
  padding: 30px 80px;
  width: 75%;
  box-sizing: border-box;
  overflow: auto;
}

.essay >>> img {
  max-width: 100%;
}

.essay >>> * {
  line-height: 28px;
  font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB",
    "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
}
.hide-full {
  height: 150vh;
  overflow: hidden;
}
.open-all-btn {
  text-align: center;
  margin-top: 20px;
}
@media screen and (max-width: 1150px) {
  .essay {
    width: 90%;
    padding: 30px 20px;
  }
}
</style>
