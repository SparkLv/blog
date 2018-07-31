<template>
  <div class="ani-box mode3">
    <div class="line top-line1" :style="{top:scrollTop>150?'198.5px':scrollTop+'px'}">
      <div :style="{top:scrollTop>150?'-3px':(72-0.5*scrollTop+'px')}" class="dot-small dot-t-small"></div>
    </div>
    <div class="line top-line2" :style="{top:scrollTop>150?'223.5px':0.6*scrollTop+75+'px'}"></div>
    <div class="line top-line3" :style="{top:scrollTop>150?'248.5px':0.3*scrollTop+150+'px'}"></div>
    <div class="cir">
      <div class="dot-c"></div>
      <div class="dot-small dot-c-small"></div>
    </div>
    <div class="line static-line1"></div>
    <div class="line static-line2">
      <div class="dot-small dot-run"></div>
    </div>
    <div class="line bottom-line1" :style="{top:scrollTop>150?'324.5px':(400-0.5*scrollTop)+'px'}"></div>
    <div class="line bottom-line2" :style="{top:scrollTop>150?'353.5px':(450-0.8*scrollTop)+'px'}">
      <div class="dot-small dot-b-small" :style="{top:scrollTop>150?'-3px':(72-0.5*scrollTop+'px')}"></div>
    </div>
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
.mode3 {
  .top-line1 {
    top: 198.5px;
    .dot-t-small {
      top: -3px;
      animation: dotLineRun4 2s infinite alternate ease-in-out;
    }
  }
  .top-line2 {
    top: 223.5px;
  }
  .top-line3 {
    top: 248.5px;
  }
  .bottom-line1 {
    top: 324.5px;
  }
  .bottom-line2 {
    top: 353.5px;
    .dot-b-small {
      top: -3px;
      right: 20px;
    }
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
      top: 42px;
      right: 42px;
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
    top: 299.5px;
    .dot-run {
      animation: dotLineRun3 2s infinite alternate ease-in-out;
      top: -3.5px;
    }
  }
}
</style>
