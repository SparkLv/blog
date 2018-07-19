<template>
  <img @click="goHome" class="logo-img" src="http://blogcdn.sparklv.cn/blog_logo.png" alt="logo">
</template>
<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/blog");
    }
  }
};
</script>

<style lang="scss" scoped>
.logo-img {
  cursor: pointer;
  width: 200px;
  height: 40px;
}
</style>
