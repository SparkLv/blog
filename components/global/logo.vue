<template>
    <div @click="goHome" class="text">Spark's Blog</div>
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
.text {
  cursor: pointer;
  color: #fff;
  border: 1.5px solid #fff;
  padding: 10px;
  border-radius: 4px;
  font-size: 18px;
}
</style>
