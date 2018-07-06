<template>
    <div>
        <canvas id="can" width="800" height="800" ref="can"></canvas>
        <!-- <nuxt-link to="/blog">blog</nuxt-link> -->
    </div>
</template>
<script>
export default {
  data() {
    return {
      ctx: null,
      step: 18*Math.PI/180,
      rot: 0
    };
  },
  mounted() {
    const can = this.$refs["can"];
    this.ctx = can.getContext("2d");
    this.run();
    setInterval(() => {
      this.run();
      this.rot += this.step;
    }, 500);
  },
  methods: {
    run() {
      this.ctx.clearRect(0, 0, 500, 500);
      let r1 = 0;
      let r2 = 0.1;
      while (r2 < 2) {
        this.drawCircle(r1, r2);
        r1 = (r1 * 10 + 2) / 10;
        r2 = (r2 * 10 + 2) / 10;
      }
    },
    drawCircle(r1, r2) {
      this.ctx.beginPath();
      this.ctx.translate(100, 100);
      this.ctx.rotate(this.rot);
      this.ctx.translate(-100, -100);
      this.ctx.arc(100, 100, 100, r1 * Math.PI, r2 * Math.PI);
      this.ctx.closePath();
      this.ctx.stroke();
    }
  }
};
</script>
<style>
#can {
  margin: 80px;
}
</style>
