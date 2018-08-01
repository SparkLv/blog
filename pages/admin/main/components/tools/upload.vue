<template>
  <div class="tool-box">
    <el-button type="primary" icon="el-icon-upload">
    </el-button>
    <input class="up-input" @change="upload" type="file" />
  </div>
</template>
<script>
export default {
  methods: {
    upload(e) {
      this.$emit("change", e);
    }
  }
};
</script>
<style lang="scss" scoped>
.tool-box {
  width: 60px;
  height: 50px;
  position: relative;
  overflow: hidden;
  .up-input {
    display: inline-block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
