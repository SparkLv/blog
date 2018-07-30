
<template>
    <canvas ref="canvas" height="400"></canvas>
</template>
<script>
export default {
  data() {
    return {
      ctx: null,
      width: 0,
      height: 400,
      balls: [],
      cursor: {
        x: 0,
        y: 0
      }
    };
  },
  mounted() {
    const w = document.documentElement.clientWidth;
    this.width = w;
    const can = this.$refs["canvas"];
    can.width = w;
    this.ctx = can.getContext("2d");
    this.initCan();
    can.addEventListener("mouseover", this.setCursor, false);
    can.addEventListener("mousemove", this.setCursor, false);
    can.addEventListener("mouseout", this.resetCursor, false);
  },
  methods: {
    setCursor(e) {
      this.cursor = {
        x: e.offsetX,
        y: e.offsetY
      };
    },
    resetCursor() {
      this.cursor = {
        x: -80,
        y: -80
      };
    },
    initCan() {
      this.ctx.fillStyle = "#95e2d4";
      this.ctx.strokeStyle = "rgba(255,255,255,0.1)";
      for (let i = 0; i < Math.floor(100 * this.width / 1400); i++) {
        this.balls.push(this.makeBall());
      }
      this.ballRun();
    },
    makeBall(add = false) {
      const obj = {};
      obj.x = add ? 0 : Math.random() * this.width;
      obj.y = Math.random() * this.height;
      obj.r = 3;
      obj.speedX = (Math.random() + 2) * this.width / 1400;
      obj.speedY =
        this.width /
        1400 *
        (Math.random() + 0.1) /
        2 *
        (Math.random() * 10 > 5 ? 1 : -1);
      return obj;
    },
    ballRun() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.balls.forEach(item => {
        this.draw(item);
        if (item.x > this.width) {
          item.x = 0;
        } else if (item.y > this.height + 30 || item.y < -30) {
          item.speedY *= -1;
        }
        item.x += item.speedX;
        item.y += item.speedY;
        if (this.getDistance(this.cursor, item) < 75) {
          if (item.x > this.cursor.x) {
            item.x += 50;
          } else {
            item.x -= 50;
          }
          if (item.y > this.cursor.y) {
            item.y += 50;
          } else {
            item.y -= 50;
          }
        }
      });
      this.calcline();
      window.requestAnimationFrame(this.ballRun);
    },
    getDistance(item1, item2) {
      const len =
        Math.abs(item1.x - item2.x) * Math.abs(item1.x - item2.x) +
        Math.abs(item1.y - item2.y) * Math.abs(item1.y - item2.y);
      return Math.sqrt(len);
    },
    calcline() {
      this.balls.forEach(item1 => {
        this.balls.forEach(item2 => {
          if (130 > this.getDistance(item1, item2)) {
            this.drawLine(
              { x: item1.x - 1.5, y: item1.y - 1.5 },
              { x: item2.x - 1.5, y: item2.y - 1.5 }
            );
          }
        });
      });
    },
    draw(item) {
      this.ctx.beginPath();
      this.ctx.arc(item.x, item.y, item.r, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.fill();
    },
    drawLine(item1, item2) {
      this.ctx.beginPath();
      this.ctx.moveTo(item1.x, item1.y);
      this.ctx.lineTo(item2.x, item2.y);
      this.ctx.closePath();
      this.ctx.stroke();
    }
  }
};
</script>
