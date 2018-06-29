<template>
    <el-form ref="add" :model='addData' class="add-tag-form" label-width="120px">
        <el-form-item label="名称：">
            <el-input v-model="addData.name"></el-input>
        </el-form-item>
        <el-form-item label="文字颜色：">
            <el-input v-model="addData.color"></el-input>
        </el-form-item>
        <el-form-item label="背景颜色：">
            <el-input v-model="addData.bgColor"></el-input>
        </el-form-item>
        <el-button @click="$emit('close')" style="float:left">
            取消
        </el-button>
        <el-button @click="addTag" style="float:right" type="primary">
            新增标签
        </el-button>
    </el-form>
</template>
<script>
import { $tags } from "~/plugins/api";
export default {
  data() {
    return {
      addData: {}
    };
  },
  props: {
    code: String
  },
  methods: {
    async addTag() {
      this.addData.code = this.code;
      const res = await $tags.addTag(this.addData);
      if (res) {
        this.$message({
          type: "success",
          message: "新增成功"
        });
        this.addData = {};
        this.$emit("refresh");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.add-tag-form {
  padding: 30px 0;
}
</style>
