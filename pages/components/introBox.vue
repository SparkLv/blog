<template>
  <section class="box">
    <div class="inner-box">
      <i :class="[iconfont,icon]"></i>
      <div class="desc">
        {{text}}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showText: true,
      iconfont: "iconfont"
    };
  },
  props: ["text", "icon"]
};
</script>


<style lang="scss" scoped>
.box {
  position:relative;
  height: 100px;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
  .inner-box {
    height: 100px;
    background: rgb(15, 136, 235);
    perspective: 300px;
    transition: all 2s;
  }
  &:hover .inner-box {
    background: #333;
    transform: rotateX(180deg);
    .iconfont {
      transition: opacity 1s;
      opacity: 0;
    }
    .desc {
      opacity: 1;
      transition: opacity 1s 1s;
      transform:translate(-50%,-50%) rotateX(180deg);
    }
  }
}
.iconfont {
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  font-size: 50px;
  line-height: 100px;
  color: #fff;
}
.desc {
  position:absolute;
  top:50%;
  left:50%;
  opacity: 0;
  color: #fff;
  font-size:30px;
}
</style>