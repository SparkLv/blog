
<template>
  <header class="header">
    <topBar />
    <HeadCan />
    <span class="header-title">Modesty Benefits</span>
  </header>
</template>
<script>
import TopBar from "./topBar";
import HeadCan from "./headCan";

export default {
  data() {
    return {};
  },
  components: {
    TopBar,
    HeadCan
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  background-image: linear-gradient(123deg, #3dbdb6, #0089ce);
  background-size: cover;
}
.header-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 50px;
  font-weight: 600;
}
</style>
