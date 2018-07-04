<template>
    <div class="tool-box">
        <el-form class="form" label-potision="left" label-width="100px">
            <el-form-item label="标题：">
                <el-input v-model="addData.title" class="title-input"></el-input>
            </el-form-item>
            <el-form-item label="图片：">
                <el-input v-model="addData.imgUrl"></el-input>
            </el-form-item>
            <el-form-item label="描述：">
                <el-input v-model="addData.remark" type="textarea" rows="4"></el-input>
            </el-form-item>
            <TagGroup @setTags="setTags"></TagGroup>
            <!-- <UploadImg @setUrl="setUrl"></UploadImg> -->
            <el-button @click="handleSure" class="sub-btn" type="primary">提 交</el-button>
        </el-form>
    </div>
</template>
<script>
import TagGroup from "./tagGroup";
import UploadImg from "./uploadImg";
import { $blogs } from "~/plugins/api";
export default {
  data() {
    return {
      addData: {}
    };
  },
  props: {
    content: String
  },
  components: {
    TagGroup,
    UploadImg
  },
  methods: {
    setTags(tags) {
      this.addData.tags = tags;
    },
    setUrl(url) {
      this.addData.imgUrl = url;
    },
    markTime() {
      const now = new Date();
      const date =
        now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
      return date;
    },
    handleSure() {
      this.addData.updateTime = this.markTime();
      this.addData.content = this.content;
      $blogs.addBlog(this.addData);
    }
  }
};
</script>
<style lang="css" scoped>
.tool-box {
  flex: 1;
  background: #404040;
  height: 100vh;
  color: #fff;
  box-sizing: border-box;
  position: relative;
}
.form {
  padding: 20px;
}
.form >>> label {
  font-size: 20px;
  color: #fff;
}
.title-input >>> .el-input__inner {
  border: none;
  border-bottom: 1px solid #eee;
  background: transparent;
  color: #fff;
  font-size: 20px;
}
.sub-btn {
  position: absolute;
  width: 80%;
  left: 10%;
  height: 50px;
  bottom: 50px;
}
</style>
