
<template>
  <header class="header">
    <!-- <nav class="top-nav">
      <TopNav :type="type"></TopNav>
      <div :class="'top-nav-bg '+(scrollTop>(wHeight-50)?'top-nav-to-right':'top-nav-to-left')"></div>
    </nav>
    <div @click="moveToCon" class="arrow-bottom"></div> -->
    <Logo />
    <div :class="'ani-all-box '+ (scrollTop<200?allAniColorArr[allAniColorIndex]:'')">
      <Mode1 :scrollTop="scrollTop" />
      <Mode2 :scrollTop="scrollTop" />
      <Mode3 :scrollTop="scrollTop" />
      <Mode4 :scrollTop="scrollTop" />
    </div>
  </header>
</template>
<script>
import TopNav from "./topNav";
import Mode1 from "./ani/mode1";
import Mode2 from "./ani/mode2";
import Mode3 from "./ani/mode3";
import Mode4 from "./ani/mode4";
export default {
  data() {
    return {
      textStyle: "",
      scrollTop: 0,
      wHeight: 0,
      bgImgArr: ["", "tech", "finance", "thinking"],
      allAniColorArr: ["blue", "green", "orange", "yellow"],
      allAniColorIndex: 0
    };
  },
  props: {
    type: { type: String, default: "" }
  },
  components: {
    TopNav,
    Mode1,
    Mode2,
    Mode3,
    Mode4
  },
  mounted() {
    window.addEventListener("scroll", this.bgImgScroll, false);
    this.wHeight = document.documentElement.clientHeight;
    this.changeAniColor();
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
    },
    changeAniColor() {
      this.changeColorHandle = setInterval(() => {
        if (this.allAniColorIndex === this.allAniColorArr.length - 1) {
          this.allAniColorIndex = 0;
        } else {
          this.allAniColorIndex += 1;
        }
      }, 2000);
    }
  }
};
</script>
<style lang="scss">
@import "./ani/ani.scss";
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
  background: #191a1f;
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
.ani-all-box {
  width: 100%;
  margin-top: 200px;
}

.ani-box {
  position: relative;
  width: 200px;
  height: 550px;
  margin: 30px;
  display: inline-block;
  border: 1px solid #aaa;
}
.ani-all-box.blue {
  @include fillColor($mode1Color);
}
.ani-all-box.green {
  @include fillColor($mode2Color);
}
.ani-all-box.orange {
  @include fillColor($mode3Color);
}
.ani-all-box.yellow {
  @include fillColor($mode4Color);
}
</style>
