<template>
    <div class="read-more-box">
        <div class="read-more-btn">
            <span class="text">Read More !</span>
            <nuxt-link to="/blog">
                <span class="arrow">></span>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.read-more-box {
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  height: 50px;
  .read-more-btn {
    width: 220px;
    height: 50px;
    background: #c32f30;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    line-height: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    .text {
      display: inline-block;
      width: 180px;
      height: 50px;
      font-size: 16px;
    }
    .arrow {
      display: inline-block;
      width: 38px;
      font-size: 24px;
      background: #b52b2c;
      cursor: pointer;
      border-left: 2px solid #eee;
      color: #fff;
    }
  }
}
</style>
