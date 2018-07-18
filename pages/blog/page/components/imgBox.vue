<template>
    <div>
        <Logo class="logo"></Logo>
        <img style="width:100%" :src="url" alt="head-img">
    </div>
</template>
<script>
export default {
  props: {
    url: String
  }
};
</script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 1;
}
</style>
