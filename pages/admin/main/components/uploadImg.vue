<template>
  <div class="upload-box">
    <el-upload action="" :limit="1" :before-upload="beforeUpload" :file-list="fileList">
      <el-button>上传封面</el-button>
    </el-upload>
  </div>
</template>
<script>
import axios from "axios";
import { $blogs } from "~/plugins/api";
export default {
  data() {
    return {
      fileList: [],
      imgUrl: ""
    };
  },
  methods: {
    async beforeUpload(file) {
      const fd = new FormData();
      fd.append("file", file);
      const res = await $blogs.upLoad(fd);
      this.imgUrl = "http://blogcdn.sparklv.cn/" + file.name;
      this.$emit("setUrl", this.imgUrl);
      return false;
    }
  }
};
</script>
<style lang="scss" scoped>
.pre-img {
  width: 100%;
}
</style>
