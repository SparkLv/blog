<template>
  <div class="ani-box mode1">
    <div class="cir1"></div>
    <div :style="{bottom:scrollTop>196?'196px':scrollTop+'px'}" class="cir2"></div>
    <div :style="{top:scrollTop>150?'260px':scrollTop+84+'px'}" class="dot-c"></div>
    <div :style="{top:scrollTop>176?'176px':scrollTop+'px'}" class="dot-small dot-t"></div>
    <div class="dot-small dot-l"></div>
    <div class="dot-small dot-b"></div>
    <div class="dot-small dot-r"></div>
  </div>
</template>
<script>
export default {
  props: {
    scrollTop: Number
  }
};
</script>
<style lang="scss">
@import "./ani.scss";
.mode1 {
  .cir1 {
    bottom: 196px;
    @include makeCir(158px, 3px, $mode1Color);
    animation: swayh 1s infinite alternate ease-in-out;
  }
  .cir2 {
    bottom: 196px;
    @include makeCir(158px, 3px, $mode1Color);
    animation: swayhr 1s infinite alternate ease-in-out;
  }
  .dot-c {
    @include makeDot(30px, $mode1Color);
    left: 85px;
    top: 260px;
  }
  .dot-t {
    top: 176px;
    left: 95px;
  }
  .dot-l {
    top: 270px;
    left: 16px;
  }
  .dot-b {
    top: 364px;
    left: 95px;
  }
  .dot-r {
    top: 270px;
    right: 16px;
  }
}
.dot-small {
  @include makeDot(10px, $mode1Color);
}
@keyframes swayh {
  from {
    left: 5px;
  }
  to {
    left: -10px;
  }
}
@keyframes swayhr {
  from {
    right: 5px;
  }
  to {
    right: -10px;
  }
}
</style>

