
<template>
  <header class="header">
    <topBar />
    <div class="head-box">

    </div>
  </header>
</template>
<script>
import TopBar from "./topBar";
export default {
  data() {
    return {};
  },
  props: {},
  components: {
    TopBar
  },
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  .head-box {
    margin-top:60px;
    height:40vh;
    background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532523898435&di=49ff3c73951677575b3f01313c9d21f2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dfb88420679f08202399f997c23929198%2F5bafa40f4bfbfbedfda7905a72f0f736afc31f1c.jpg') no-repeat center center/cover;
  }
}
</style>
