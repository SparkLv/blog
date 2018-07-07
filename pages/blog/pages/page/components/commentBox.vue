<template>
    <div class="comment-box">
        <el-form class="comment-form" label-width="100px">
            <el-form-item label="邮箱：">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="留言：">
                <el-input type="textarea" rows="4"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.comment-box {
  width: 75%;
  margin: 0 auto;
  .comment-form {
    width: 50%;
  }
}
</style>
