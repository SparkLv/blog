<template>
  <div class="tool-box">
    <el-input placeholder="标题" v-model="addData.title" class="title-input"></el-input>
    <div class="admin-btn-group">
      <el-button @click="back" class="sub-btn" type="danger">退 出</el-button>
      <el-button @click="handleSure" class="sub-btn" type="primary">提 交</el-button>
    </div>
    <el-collapse class="collapse">
      <el-collapse-item title="more infomation" name="1">
        <el-form class="form" label-width="100px">
          <el-form-item label="关键字">
            <el-input v-model="addData.keyword"></el-input>
          </el-form-item>
          <el-form-item label="图片">
            <UploadImg @setUrl="setUrl" />
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="addData.remark" style="width:450px;" type="textarea" rows="3"></el-input>
          </el-form-item>
        </el-form>
        <el-form class="form" label-width="100px">
          <TagGroup :nowBlog="nowBlog" @setTags="setTags"></TagGroup>
        </el-form>
      </el-collapse-item>
    </el-collapse>
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
    content: String,
    nowBlog: Object
  },
  components: {
    TagGroup,
    UploadImg
  },
  watch: {
    nowBlog() {
      if (this.nowBlog) {
        this.addData.keyword = this.nowBlog.keyword;
        this.addData.remark = this.nowBlog.remark;
        this.addData.imgUrl = this.nowBlog.imgUrl;
        this.$set(this.addData, "title", this.nowBlog.title);
      } else {
        this.addData = {};
      }
    }
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
      if (this.nowBlog) {
        this.mod();
      } else {
        this.add();
      }
    },
    async add() {
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
    async mod() {
      this.addData.updateTime = this.markTime();
      this.addData.content = this.content;
      const res = await $blogs.modBlog(this.nowBlog.id, this.addData);
      if (res) {
        this.$message({
          type: "success",
          message: "修改成功"
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
  background: #2c2c2c;
  box-sizing: border-box;
  position: relative;
  height: 60px;
  padding: 0 10px;
}
.form >>> label {
  font-size: 20px;
}
.title-input {
  width: 300px;
}
.title-input >>> .el-input__inner {
  border: none;
  color: #fff;
  border-bottom: 1px solid #fff;
  background: transparent;
  font-size: 20px;
  margin-top:10px;
}
.admin-btn-group {
  position:absolute;
  right:10px;
  top:0;
  padding: 10px;
  z-index:11;
}
.collapse {
  width: 600px;
  position: absolute;
  top: 0;
  left: 320px;
  z-index: 10;
  border-top: none;
  border-bottom: none;
}
.collapse >>> .el-collapse-item__header {
  width: 180px;
  background: transparent;
  padding-left: 30px;
  font-size: 16px;
  color: #fff;
  outline: none;
  height: 60px;
  line-height: 60px;
}
.collapse >>> .el-collapse-item__arrow {
  line-height: 60px;
}
.collapse >>> .el-collapse-item__content {
  background: #ddd;
  padding: 30px;
}
</style>
