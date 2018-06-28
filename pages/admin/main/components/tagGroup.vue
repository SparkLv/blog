<template>
    <div>
        <el-form-item label="已选择：">
            <el-tag v-for="(item,index) in selTags" closable @close="delTag(index)" :key="index" :style="{margin:'5px',cursor:'pointer',color:item.color,backgroundColor:item.bgColor}">{{item.name}}</el-tag>
        </el-form-item>
        <div>
            <el-tabs class="tag-tab" v-model="code" @tab-click="tabChange">
                <el-tab-pane label="Technology" name="1">
                    <span @click="sel(index,1)" v-for="(item,index) in allTag1" :key="index">
                        <el-tag :style="{margin:'5px',cursor:'pointer',color:item.color,backgroundColor:item.bgColor}">{{item.name}}</el-tag>
                    </span>
                    <el-button type="text" @click="addTagShow=true" style="color:#eee;font-size:18px;;margin-left:5px;">+新增</el-button>
                </el-tab-pane>
                <el-tab-pane label="Finance" name="2">
                    <span @click="sel(index,2)" v-for="(item,index) in allTag2" :key="index">
                        <el-tag :style="{margin:'5px',cursor:'pointer',color:item.color,backgroundColor:item.bgColor}">{{item.name}}</el-tag>
                    </span>
                    <el-button type="text" @click="addTagShow=true" style="color:#eee;font-size:18px;;margin-left:5px;">+新增</el-button>
                </el-tab-pane>
                <el-tab-pane label="Thinking" name="3">
                    <span @click="sel(index,3)" v-for="(item,index) in allTag3" :key="index">
                        <el-tag :style="{margin:'5px',cursor:'pointer',color:item.color,backgroundColor:item.bgColor}">{{item.name}}</el-tag>
                    </span>
                    <el-button type="text" @click="addTagShow=true" style="color:#eee;font-size:18px;margin-left:5px;">+新增</el-button>
                </el-tab-pane>
            </el-tabs>
            <AddTag v-if="addTagShow" @close="addTagShow=false"></AddTag>
            <UploadImg></UploadImg>
        </div>
    </div>
</template>
<script>
import AddTag from "./addTag";
import UploadImg from './uploadImg'
export default {
  data() {
    return {
      allTag1: [
        { id: 1, name: "react", color: "#fff", bgColor: "pink", code: 1 },
        { id: 2, name: "react1", color: "#fff", bgColor: "yellow", code: 1 },
        { id: 3, name: "react2", color: "#fff", bgColor: "black", code: 1 },
        { id: 4, name: "react3", color: "#fff", bgColor: "blue", code: 1 },
        { id: 5, name: "react4", color: "#fff", bgColor: "green", code: 1 },
        { id: 6, name: "react5", color: "#fff", bgColor: "red", code: 1 }
      ],
      allTag2: [
        { id: 7, name: "react", color: "#fff", bgColor: "orange", code: 2 }
      ],
      allTag3: [
        { id: 8, name: "react", color: "#fff", bgColor: "blue", code: 3 }
      ],
      selTags: [],
      code: "1",
      addTagShow: false
    };
  },
  components: {
    AddTag,
    UploadImg
  },
  methods: {
    sel(index, num) {
      this.selTags.push(this[`allTag${num}`][index]);
      this[`allTag${num}`].splice(index, 1);
    },
    tabChange() {},
    delTag(index) {
      const obj = this.selTags[index];
      this[`allTag${this.code}`].push(obj);
      this[`allTag${this.code}`].sort(function(a, b) {
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
