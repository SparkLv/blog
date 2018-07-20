<template>
    <div class="ani-box mode3">
        <div class="line top-line1"></div>
        <div class="line top-line2"></div>
        <div class="line top-line3"></div>
        <div class="cir">
            <div class="dot-c"></div>
            <div class="dot-small dot-c-small"></div>
        </div>
        <div class="line static-line1"></div>
        <div class="line static-line2">
            <div class="dot-small dot-run"></div>
        </div>
        <div class="line bottom-line1"></div>
        <div class="line bottom-line2"></div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "./ani.scss";
.mode3 {
  .top-line1 {
    top: 200px;
  }
  .top-line2 {
    top: 223px;
  }
  .top-line3 {
    top: 248px;
  }
  .bottom-line1 {
    top: 323.5px;
  }
  .bottom-line2 {
    top: 353px;
  }
  .cir {
    @include makeCir(150px, 3px, $mode3Color);
    top: 200px;
    left: 25px;
    .dot-c {
      @include makeDot(30px, $mode3Color);
      top: 60px;
      left: 60px;
    }
    .dot-c-small {
      top: 40px;
      right: 40px;
    }
  }
  .dot-small {
    @include makeDot(10px, $mode3Color);
  }
  .line {
    @include makeLine(200px, $mode3Color);
  }
  .static-line1 {
    top: 274.5px;
  }
  .static-line2 {
    top: 298.5px;
    .dot-run {
      animation: dotLineRun3 2s infinite alternate ease-in-out;
      top: -3.5px;
    }
  }
}
</style>
