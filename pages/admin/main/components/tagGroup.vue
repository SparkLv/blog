<template>
  <div>
    <el-form-item label="已选择：">
      <el-tag v-for="(item,index) in selTags" closable @close="delTag(index)" :key="index" :style="{margin:'5px',cursor:'pointer',color:item.color,backgroundColor:item.bgColor}">{{item.name}}</el-tag>
    </el-form-item>
    <div>
      <el-tabs class="tag-tab" v-model="code" @tab-click="tabChange">
        <el-tab-pane label="Technology" name="1">
          <span @click="sel(index,1)" v-for="(item,index) in tags.tags1" :key="index">
            <el-tag :style="{margin:'5px',cursor:'pointer',color:item.color,backgroundColor:item.bgColor}">{{item.name}}</el-tag>
          </span>
          <el-button type="text" @click="addTagShow=true" style="color:#eee;font-size:18px;;margin-left:5px;">+新增</el-button>
        </el-tab-pane>
        <el-tab-pane label="Finance" name="2">
          <span @click="sel(index,2)" v-for="(item,index) in tags.tags2" :key="index">
            <el-tag :style="{margin:'5px',cursor:'pointer',color:item.color,backgroundColor:item.bgColor}">{{item.name}}</el-tag>
          </span>
          <el-button type="text" @click="addTagShow=true" style="color:#eee;font-size:18px;;margin-left:5px;">+新增</el-button>
        </el-tab-pane>
        <el-tab-pane label="Thinking" name="3">
          <span @click="sel(index,3)" v-for="(item,index) in tags.tags3" :key="index">
            <el-tag :style="{margin:'5px',cursor:'pointer',color:item.color,backgroundColor:item.bgColor}">{{item.name}}</el-tag>
          </span>
          <el-button type="text" @click="addTagShow=true" style="color:#eee;font-size:18px;margin-left:5px;">+新增</el-button>
        </el-tab-pane>
      </el-tabs>
      <AddTag @refresh="getTags" :code="code" v-if="addTagShow" @close="addTagShow=false"></AddTag>
    </div>
  </div>
</template>
<script>
import AddTag from "./addTag";
import { $tags } from "~/plugins/api";
export default {
  data() {
    return {
      selTags: [],
      oTags: {},
      tags: {},
      code: "1",
      addTagShow: false
    };
  },
  components: {
    AddTag
  },
  created() {
    this.getTags();
  },
  methods: {
    async getTags() {
      const res = await $tags.getTagByCode(1);
      const res1 = await $tags.getTagByCode(2);
      const res2 = await $tags.getTagByCode(3);
      this.selTags = [];
      this.otags = {
        tags1: res,
        tags2: res1,
        tags3: res2
      };
      this.tags = JSON.parse(JSON.stringify(this.otags));
    },
    sel(index, num) {
      this.selTags.push(this.tags[`tags${num}`][index]);
      this.tags[`tags${num}`].splice(index, 1);
      this.$emit("setTags", this.selTags.join(","));
    },
    tabChange() {
      this.selTags = [];
      this.tags = JSON.parse(JSON.stringify(this.otags));
    },
    delTag(index) {
      const obj = this.selTags[index];
      this.tags[`tags${this.code}`].push(obj);
      this.tags[`tags${this.code}`].sort(function(a, b) {
        return a.id - b.id;
      });
      this.selTags.splice(index, 1);
    }
  }
};
</script>
<style lang="css" scoped>
.tag-tab >>> .el-tabs__item {
  color: #fff !important;
  font-size: 16px;
}
.tag-tab >>> .is-active {
  color: #ca6854 !important;
}
.tag-tab >>> .el-tabs__active-bar {
  background: #ca6854 !important;
}
</style>
