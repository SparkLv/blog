<template>
    <div class="ani-box mode4">
        <div class="cir cir1">
            <div class="dot-c"></div>
            <div class="dot-c-run1 dot-small"></div>
            <div class="dot-c-run2 dot-small"></div>
        </div>
        <div class="cir cir2" :style="{top:scrollTop>150?'215px':(385-scrollTop)+'px'}">
            <div class="dot-m-run1 dot-small"></div>
        </div>
        <div :style="{top:scrollTop>150?'185px':scrollTop+'px'}" class="cir cir3">
            <div class="dot-o-run1 dot-small"></div>
            <div class="dot-o-run2 dot-small"></div>
        </div>
        <div :style="{top:scrollTop>150?'212px':scrollTop+130+'px'}" class="dot-m-static1 dot-small"></div>
        <div class="dot-m-static2 dot-small"></div>
        <div class="dot-o-static1 dot-small"></div>
        <div class="dot-o-static2 dot-small"></div>
        <div :style="{top:scrollTop>150?'273.5px':(445-scrollTop)+'px'}" class="dot-o-static3 dot-small"></div>
        <div :style="{top:scrollTop>150?'308px':(471.5-scrollTop)+'px'}" class="dot-o-static4 dot-small"></div>
        <div :style="{top:scrollTop>150?'365px':(536.5-scrollTop)+'px'}" class="dot-o-static5 dot-small"></div>
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
.mode4 {
  .cir1 {
    @include makeCir(60px, 3px, $mode4Color);
    top: 245px;
    left: 70px;
    animation: cirRotate1 3s infinite linear;
    .dot-c {
      @include makeDot(30px, $mode4Color);
      @extend %center;
    }
    .dot-c-run1 {
      top: 10px;
      left: -2px;
    }
    .dot-c-run2 {
      top: 10px;
      right: -2px;
    }
  }
  .cir2 {
    @include makeCir(120px, 3px, $mode4Color);
    top: 215px;
    left: 40px;
    animation: cirRotate1 4s 1s infinite linear;
    .dot-m-run1 {
      top: 28px;
    }
  }
  .cir3 {
    @include makeCir(180px, 3px, $mode4Color);
    top: 185px;
    left: 10px;
    animation: cirRotate1 5s infinite linear;
    .dot-o-run1 {
      top: 60px;
      left: -2.5px;
    }
    .dot-o-run2 {
      top: 60px;
      right: -2.5px;
    }
  }
  .dot-o-static1 {
    top: 273.5px;
    left: 7px;
  }
  .dot-o-static2 {
    top: 308px;
    left: 14px;
  }
  .dot-o-static3 {
    top: 273.5px;
    right: 1px;
  }
  .dot-o-static4 {
    top: 308px;
    right: 9px;
  }
  .dot-o-static5 {
    top: 365px;
    left: 100px;
  }
  .dot-m-static1 {
    top: 212px;
    left: 98.5px;
  }
  .dot-m-static2 {
    top: 242px;
    left: 45px;
  }
  .dot-small {
    @include makeDot(10px, $mode4Color);
  }
}
</style>
