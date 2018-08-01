
<template>
  <div class="home-box">
    <!-- <div class="box">
      <div :class="'ani-all-box '+ (scrollTop<200?allAniColorArr[allAniColorIndex]:'')">
        <Mode1 :scrollTop="scrollTop" />
        <Mode2 :scrollTop="scrollTop" />
        <Mode3 :scrollTop="scrollTop" />
        <Mode4 :scrollTop="scrollTop" />
        <Mode1 :scrollTop="scrollTop" />
        <Mode2 :scrollTop="scrollTop" />
        <Mode3 :scrollTop="scrollTop" />
        <Mode4 :scrollTop="scrollTop" />
      </div>
    </div> -->
    <div class="sel-box">
      <div class="sel-box-item">
        <span class="sel-num">1</span>
        <span class="sel-text">
          <a href="/blog">Blog</a>
        </span>
      </div>
      <div class="sel-box-item">
        <span class="sel-num">2</span>

        <span class="sel-text">
          <a href="#">None</a>
        </span>
      </div>
      <div class="sel-box-item">
        <span class="sel-num">3</span>

        <span class="sel-text">
          <a href="#">None</a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import Mode1 from "./components/ani/mode1";
import Mode2 from "./components/ani/mode2";
import Mode3 from "./components/ani/mode3";
import Mode4 from "./components/ani/mode4";
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
@import "./components/ani/ani.scss";
@keyframes tobottom {
  from {
    bottom: 80px;
  }
  to {
    bottom: 60px;
  }
}
.box {
  position: relative;
  height: 800px;
  overflow-x: hidden;
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
  position: absolute;
  width: 1800px;
  margin-left: -900px;
  left: 50%;
  margin-top: 100px;
  text-align: center;
  white-space: nowrap;
  transform-origin: center top;
}

.ani-box {
  position: relative;
  width: 200px;
  height: 550px;
  margin: 15px;
  display: inline-block;
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
.home-box {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
}
.sel-box {
  display: flex;
  height: 300px;
  padding-bottom: 50px;
  flex: 1;
  .sel-box-item {
    flex: 1;
    box-shadow: 0 0 2px #333;
    text-align: center;
    line-height: 300px;
    &:hover {
      .sel-num {
        display: none;
      }
      .sel-text {
        display: inline;
      }
    }
    .sel-num {
      font-size: 100px;
    }
    .sel-text {
      display: none;
      font-size: 100px;
      cursor: pointer;
    }
  }
  .sel-box-item:nth-child(3) {
    // border-right: none;
  }
}
</style>

