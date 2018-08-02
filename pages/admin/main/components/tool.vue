<template>
  <div class="tool-box">
    <el-form inline class="form" label-potision="left" label-width="100px">
      <el-form-item label="标题：">
        <el-input v-model="addData.title" class="title-input"></el-input>
      </el-form-item>
      <el-form-item label="关键字：">
        <el-input v-model="addData.keyword" class="title-input"></el-input>
      </el-form-item>
      <el-form-item label="图片：">
        <UploadImg @setUrl="setUrl" />
      </el-form-item>
      <el-form-item label="描述：">
        <el-input v-model="addData.remark" style="width:300px;" type="textarea" rows="3"></el-input>
      </el-form-item>
    </el-form>
    <el-form class="form" label-potision="left" label-width="100px">
      <TagGroup @setTags="setTags"></TagGroup>
    </el-form>
    <div class="admin-btn-group">
      <el-button @click="back" class="sub-btn" type="danger">退 出</el-button>
      <el-button @click="handleSure" class="sub-btn" type="primary">提 交</el-button>
    </div>
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
    async handleSure() {
      this.addData.updateTime = this.markTime();
      this.addData.content = this.content;
      const res = await $blogs.addBlog(this.addData);
      if (res) {
        this.$message({
          type: "success",
          message: "新增成功"
        });
        document.location.reload();
      }
    },
    back() {
      localStorage.removeItem("token");
      this.$router.back();
    }
  }
};
</script>
<style lang="css" scoped>
.tool-box {
  display: flex;
  background: #ededed;
  /* color: #fff; */
  box-sizing: border-box;
}
.form {
  flex: 1;
  padding: 10px;
}
.form >>> label {
  font-size: 20px;
  /* color: #fff; */
}
.title-input {
  width: 200px;
}
.title-input >>> .el-input__inner {
  border: none;
  border-bottom: 1px solid #333;
  background: transparent;
  /* color: #fff; */
  font-size: 20px;
}
.sub-btn {
  float: right;
  width: 80px;
  height: 40px;
  margin: 0 5px;
}
.admin-btn-group {
  padding: 10px;
}
</style>
