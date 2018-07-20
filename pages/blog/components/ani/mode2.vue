<template>
    <div class="ani-box mode2">
        <div class="cir1 cir">
            <div class="dot-angle"></div>
        </div>
        <div class="cir2 cir" :style="{top:scrollTop>150?'175px':scrollTop+'px'}">
            <div class="dot-angle"></div>
        </div>
        <div class="cir3 cir" :style="{bottom:scrollTop>150?'175px':scrollTop+'px'}"></div>
        <div class="cir4 cir">
            <div class="dot-angle"></div>
        </div>
        <div class="cir-c cir" :style="{top:scrollTop>150?'250px':scrollTop+75+'px'}">
            <div class="dot-c"></div>
        </div>
        <div class="line line1">
            <div class="dot-small run-dot1"></div>
            <div class="dot-small run-dot2"></div>
        </div>
        <div class="line line2" :style="{bottom:scrollTop>150?'350px':scrollTop+170+'px'}">
            <div class="dot-small run-dot3"></div>
        </div>
        <div class="dot-small static-dot1"></div>
        <div class="dot-small static-dot2"></div>
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
.mode2 {
  .cir {
    @include makeCir(50px, 2px, $mode2Color);
    .dot-angle {
      @include makeDot(10px, $mode2Color);
      top: 20px;
      left: 20px;
    }
    .dot-c {
      @include makeDot(30px, $mode2Color);
      top: 10px;
      left: 10px;
    }
  }
  .cir1 {
    top: 175px;
    left: 0;
  }
  .cir2 {
    top: 175px;
    right: 0;
  }
  .cir3 {
    bottom: 175px;
    left: 0;
  }
  .cir4 {
    bottom: 175px;
    right: 0;
  }
  .cir-c {
    top: 250px;
    left: 75px;
  }
  .line {
    @include makeLine(210px, $mode2Color);
  }
  .line1 {
    top: 200px;
    left: 25px;
    transform-origin: 0 0;
    transform: rotate(45deg);
    .run-dot1 {
      animation: dotLineRun1 2s infinite alternate ease-in-out;
    }
    .run-dot2 {
      animation: dotLineRun2 2s infinite alternate ease-in-out;
    }
  }
  .line2 {
    bottom: 350px;
    right: 25px;
    transform-origin: 100% 100%;
    transform: rotate(-45deg);
    .run-dot1 {
      left: 22%;
    }
    .run-dot2 {
      right: 22%;
    }
    .run-dot3 {
      animation: dotLineRun3 2s 1s infinite alternate ease-in-out;
    }
  }
  .dot-small {
    @include makeDot(10px, $mode2Color);
    top: -3.5px;
  }
  .static-dot1 {
    top: 306.5px;
    left: 56.5px;
  }
  .static-dot2 {
    top: 236.5px;
    right: 63.5px;
  }
}
</style>
