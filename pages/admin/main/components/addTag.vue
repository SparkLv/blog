<template>
    <el-form class="add-tag-form" label-width="120px">
        <el-form-item label="名称：">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="文字颜色：">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="背景颜色：">
            <el-input></el-input>
        </el-form-item>
         <el-button @click="$emit('close')" style="float:left">
            取消
        </el-button>
        <el-button style="float:right" type="primary">
            新增标签
        </el-button>
    </el-form>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.add-tag-form {
  padding: 30px 0;
}
</style>
