<template>
  <div class="comment-box">
    <div class="comment-title">
      <i class="iconfont icon-msg"></i>
      <span>comment</span>
      <hr>
    </div>
    <div v-if="comments.length" class="comment-item-box">
      <div class="comment-item" v-for="item in comments" :key="item.id">
        <div class="comment-head">
          <i class="iconfont icon-touxiang"></i>
          <span class="comment-name">{{item.username}}</span>
          <span>留言于</span>
          <span class="comment-time">{{item.time}}</span>
        </div>
        <div class="comment-content">
          {{item.content}}
        </div>
      </div>
    </div>
    <div style="text-align:center;margin:50px 0" v-else>
      <span>暂无留言！</span>
    </div>
    <div class="input-area">
      <span class="input-title">Thanks For Your Comment</span>
      <el-form ref="commentForm" class="input-box" :model="commentForm" :rules="rules">
        <div v-if="!userInfo" class="user-info">
          <el-form-item prop="username">
            <el-input placeholder="name" v-model="commentForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input placeholder="email" v-model="commentForm.email"></el-input>
          </el-form-item>
        </div>
        <el-form-item prop="content" class="comment-con-box">
          <el-input placeholder="comment" v-model="commentForm.content" type="textarea" class="comment-con" rows="4"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="addComment" style="float:right" type="primary">add comment</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { $blogs } from "~/plugins/api";

export default {
  data() {
    return {
      comments: [],
      commentForm: {},
      rules: {
        username: [{ required: true, message: "必填", trigger: "blur" }],
        email: [{ required: true, message: "必填", trigger: "blur" }],
        content: [{ required: true, message: "必填", trigger: "blur" }]
      },
      userInfo: null
    };
  },
  mounted() {
    this.getCom();
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      if (localStorage.getItem("userInfo")) {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.commentForm.username = this.userInfo.username;
        this.commentForm.email = this.userInfo.email;
      }
    },
    addComment() {
      this.$refs["commentForm"].validate(valid => {
        if (valid) {
          this.runAdd();
        }
      });
    },
    async runAdd() {
      this.commentForm.time = this.markTime();
      const res = await $blogs.setComments(
        this.$route.query.id,
        this.commentForm
      );
      if (res) {
        this.$message({
          type: "success",
          message: "留言成功"
        });
        const userInfo = {
          username: this.commentForm.username,
          email: this.commentForm.email
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        this.$refs["commentForm"].resetFields();
        this.getCom();
        this.getUserInfo();
      }
    },
    async getCom() {
      const res = await $blogs.getComments(this.$route.query.id);
      this.comments = res;
    },
    markTime() {
      const now = new Date();
      const date =
        now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
      return date;
    }
  }
};
</script>
<style lang="scss" scoped>
.comment-box {
  width: 75%;
  padding: 10px 80px;
  margin: 0 auto;
  box-sizing: border-box;
}
.comment-title {
  color: #4185f3;
  .icon-msg {
    font-size: 30px;
  }
  span {
    font-size: 24px;
    line-height: 24px;
    margin-left: 10px;
  }
}
.comment-item-box {
  color: #707070;
  margin-bottom: 50px;
  .comment-item {
    box-shadow: 2px 2px 2px #eee;
    margin-top: 10px;
    padding: 10px 5px;
    .comment-head {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      height: 35px;
      i {
        font-size: 30px;
        margin-top: 4px;
        margin-right: 15px;
        color: #d33621;
      }
      .comment-name {
        color: #333;
        font-weight: 600;
      }
    }
    .comment-content {
      color: #333;
      margin-left: 45px;
    }
  }
}
.input-area {
  padding: 30px 0;
  background: url("/comment.jpg") center/cover;
  text-align: center;
  .input-title {
    font-size: 30px;
    color: #fff;
  }
}
.input-box {
  background: rgba(255, 255, 255, 0.5);
  width: 694px;
  margin: 20px auto 0;
  padding: 30px 20px 10px;
  border-radius: 4px;
}
@media screen and (max-width: 1150px) {
  .comment-box {
    width: 90%;
    padding: 10px 20px;
    .input-box {
      width: 80%;
    }
  }
}
</style>
