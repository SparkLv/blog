<template>
  <div ref="canBox" class="can-box">
    <canvas ref="can"></canvas>
    <span class="title">Just Live My Life !</span>
    <div class="blog-title-box">
      <span class="dot"></span>
      <nuxt-link to="/blog">Blog</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ctx: null,
      fw: 0,
      fh: 0,
      hw: 0,
      hh: 0,
      step: 1 * Math.PI / 360,
      rot: 0,
      dot: [],
      left: null,
      moveSwitch: true,
      handleCircle: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.setSize();
      window.addEventListener("resize", this.setSize, false);
    },
    setSize() {
      const can = this.$refs["can"];
      const canBox = this.$refs["canBox"];
      this.fw = document.documentElement.clientWidth;
      this.fh = document.documentElement.clientHeight;
      this.hw = this.fw / 2;
      this.hh = this.fh / 2;
      can.width = this.fw;
      can.height = this.fh;
      canBox.style.width = this.fw + "px";
      canBox.style.height = this.fh + "px";
      this.ctx = can.getContext("2d");
      this.startRunCircle();
      this.initDot();
      // can.addEventListener("mousemove", this.overDot, false);
    },
    overDot(e) {
      if (this.moveSwitch) {
        const actDot = [];
        const x = e.clientX;
        const y = e.clientY;
        let left = true;
        if (x > this.hh) {
          left = false;
        } else {
          left = true;
        }
        if (left !== this.left) {
          this.dot.forEach((item, index) => {
            const tmp = JSON.parse(JSON.stringify(item));
            item.speedX += 10;
            if (left) {
              item.r += 0.5;
              item.dirX = false;
            } else {
              item.r -= 0.5;
              item.dirX = true;
            }
            this.moveSwitch = false;
            setTimeout(() => {
              this.dot[index].speedX = tmp.speedX;
              this.dot[index].dirX = tmp.dirX;
              this.moveSwitch = true;
            }, 1000);
          });
        }
        this.left = left;
      }
    },
    startRunCircle() {
      this.rot = 0;
      if (this.handleCircle) {
        clearInterval(this.handleCircle);
      }
      this.runCircle();
      this.handleCircle = setInterval(() => {
        this.rot += this.step;
        this.runCircle();
        this.runDot();
      }, 120);
    },
    runCircle() {
      this.ctx.clearRect(0, 0, this.fw, this.fh);
      this.ctx.fillStyle = "#4d5982";
      let angle = 0;
      while (angle < 360) {
        this.drawCircle(angle, this.fh * 0.75, 1);
        this.drawCircle(angle, this.fh * 0.3, -1);
        angle += 3;
      }
    },
    drawCircle(angle, r, dir) {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.translate(this.hw, this.hh);
      this.ctx.rotate(dir * this.rot);
      this.ctx.translate(-this.hw, -this.hh);
      this.ctx.arc(
        this.hw + r * Math.cos(angle * Math.PI / 180),
        this.hh - r * Math.sin(angle * Math.PI / 180),
        4,
        0,
        2 * Math.PI
      );
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.restore();
    },
    initDot() {
      let num = 0;
      this.dot = [];
      while (num < Math.floor(this.fw * 0.1)) {
        this.dot.push(this.getDot());
        num++;
      }
    },
    getDot() {
      const dot = {
        x: 0,
        y: 0,
        r: 0,
        speedX: 0,
        speedY: 0,
        dirX: true,
        dirY: true
      };
      dot.y = this.hh - 100 + Math.floor(200 * Math.random());
      dot.x = Math.floor(this.fw * Math.random());
      dot.r = Math.floor(3 * Math.random()) + 1;
      dot.speedX = Math.floor(Math.random() + 1) / 3;
      dot.speedY = Math.floor(Math.random() + 1) / 3;
      dot.dirX = Math.random() * 10 > 5;
      dot.dirY = Math.random() * 10 > 5;
      return dot;
    },
    runDot() {
      this.ctx.fillStyle = "#a7acbd";
      this.dot.forEach(item => {
        if (item.x + item.r > this.fw) {
          item.dirX = false;
        } else if (item.x - item.r < 0) {
          item.dirX = true;
        }
        if (item.y - item.r < this.hh - 100) {
          item.dirY = true;
        } else if (item.y + item.r > this.hh + 100) {
          item.dirY = false;
        }
        if (item.dirX) {
          item.x += item.speedX;
        } else {
          item.x -= item.speedX;
        }
        if (item.dirY) {
          item.y += item.speedY;
        } else {
          item.y -= item.speedY;
        }
        this.drawDot(item);
      });
    },
    drawDot(data) {
      this.ctx.beginPath();
      this.ctx.arc(data.x, data.y, data.r, 0, 2 * Math.PI);
      this.ctx.closePath();
      this.ctx.fill();
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes buling {
  0% {
    box-shadow: none;
  }
  20% {
    box-shadow: 0 0 0 1px #ffec8b;
  }
  30% {
    box-shadow: 0 0 0 2px #ffec8b;
  }
  40% {
    box-shadow: 0 0 0 3px #ffec8b;
  }
  50% {
    box-shadow: 0 0 0 4px #ffec8b;
  }
  60% {
    box-shadow: 0 0 0 5px #ffec8b;
  }
  70% {
    box-shadow: 0 0 0 4px #ffec8b;
  }
  80% {
    box-shadow: 0 0 0 3px #ffec8b;
  }
  90% {
    box-shadow: 0 0 0 2px #ffec8b;
  }
  100% {
    box-shadow: 0 0 0 1px #ffec8b;
  }
}
.can-box {
  background: radial-gradient(
    #3f528c,
    #3b4b86,
    #263a6d,
    #172446,
    #17203d,
    #18223d
  );
  overflow: hidden;
  position: relative;
}
.title {
  color: #fff;
  font-size: 30px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.blog-title-box {
  position: absolute;
  top: 40%;
  left: 65%;
  a {
    line-height: 20px;
    font-weight: 600;
    font-size: 20px;
    color: firebrick;
    vertical-align: middle;
  }
}
.dot {
  border: 5px solid #eeb422;
  display: inline-block;
  border-radius: 50%;
  animation: buling 3s infinite;
  animation-timing-function: linear;
  line-height: 20px;
  margin: 0 20px;
}
</style>
