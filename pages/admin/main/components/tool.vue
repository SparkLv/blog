<template>
    <div class="tool-box">
        <el-form class="form" label-potision="left" label-width="100px">
            <el-form-item label="标题：">
                <el-input class="title-input"></el-input>
            </el-form-item>
            <TagGroup></TagGroup>
            <el-button class="sub-btn" type="primary">提 交</el-button>
        </el-form>
    </div>
</template>
<script>
import TagGroup from './tagGroup'
export default {
    components:{
        TagGroup
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
