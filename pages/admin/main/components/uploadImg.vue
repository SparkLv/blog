<template>
  <div class="upload-box">
    <div class="pre-img-box">
      <img class="pre-img" :src="preUrl" />
    </div>
    <el-upload action="https://sm.ms/api/upload" :limit="1" :before-upload="beforeUpload" :file-list="fileList">
      <el-button>上传封面</el-button>
    </el-upload>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      fileList: [],
      imgUrl: "",
      preUrl: ""
    };
  },
  methods: {
    beforeUpload(file) {
      const fd = new FormData();
      fd.append("smfile", file);
      axios.post("https://sm.ms/api/upload", fd).then(res => {
        this.imgUrl = res.data.url;
        const reader = new FileReader();
        const that = this;
        reader.readAsDataURL(file);
        reader.onload = function() {
          that.preUrl = this.result;
        };
        this.$emit("setUrl", this.imgUrl);
      });
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
