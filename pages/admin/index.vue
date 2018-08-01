<template>
    <div class="login-box">
        <h2>Blog管理后台</h2>
        <el-form label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="loginForm.password" type="password"></el-input>
            </el-form-item>
        </el-form>
        <div style="display:flex;margin-top:50px;justify-content:space-around">
            <el-button @click="login" type="primary">
                登录
            </el-button>
            <nuxt-link to="/">
                <el-button type="warning">
                    返回主页
                </el-button>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
import { $users } from "~/plugins/api";

export default {
  layout: "admin",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      const res = await $users.login(this.loginForm);
      if (res.code == 1) {
        localStorage.setItem("token", res.token);
        this.$router.push("/admin/main");
      } else {
        this.$message({ type: "error", message: res.message });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login-box {
  text-align: center;
  width: 400px;
  height: 400px;
  padding: 20px;
  border: 1px solid #333;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

