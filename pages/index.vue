<template>
  <section>
    <canvas id="atom" style="background-color:rgb(247,250,252)"></canvas>
    <div class="title animated bounce">
      Welcome to Spark's homePage !
    </div>
    <div class="bar">
      <nuxt-link to="/blog">
        <IntroBox icon="icon-blog" text="Blog"></IntroBox>
      </nuxt-link>
      <nuxt-link to="#">
        <IntroBox icon="icon-none" text="Nothing"></IntroBox>
      </nuxt-link>
      <nuxt-link to="#">
        <IntroBox icon="icon-none" text="Nothing"></IntroBox>
      </nuxt-link>
    </div>
    <h4 class="bottom-text">
      联系我，请戳:
      <a href="mailto:sparklv@outlook.com">
        send me an email
        <i class="iconfont icon-youjian" style="font-size:30px;margin-top:-10px"></i>
      </a>
    </h4>
  </section>
</template>

<script>
import DrawAtom from "./components/atom.js";
import IntroBox from "./components/introBox";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initCanvas();
  },
  components: {
    IntroBox
  },
  methods: {
    initCanvas() {
      var atom = document.getElementById("atom");
      var cheight = document.documentElement.clientHeight - 5;
      var cwidth = document.body.clientWidth;
      atom.setAttribute("width", cwidth);
      atom.setAttribute("height", cheight);
      let num = 25;
      if (cwidth < 800) {
        num = 10;
      }
      var obj = new DrawAtom(atom, {
        pointColor: "#BFEFFF",
        lineColor: "#BFEFFF",
        num: num
      });
      obj.run();
    }
  }
};
</script>


<style scoped lang="scss">
$text-color: rgb(15, 136, 235);
section {
  text-align: center;
  position: relative;
  background-color: rgb(247, 250, 252);
}
.title {
  position: absolute;
  width: 100%;
  top: 10%;
  font-size: 40px;
  color: $text-color;
  font-family: "Times New Roman", Times, serif;
}
.bar {
  position: absolute;
  width: 80%;
  max-width: 400px;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
}
.bottom-text {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
}
a {
  color: $text-color;
}
</style>