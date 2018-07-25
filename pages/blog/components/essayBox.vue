<template>
  <section class="content">
    <div class="essay-box">
      <Essay v-for="item in formatTag" :key="item.id" :blog="item"></Essay>
    </div>
  </section>
</template>
<script>
import Essay from "./essay";
import { $tags } from "~/plugins/api";
export default {
  data() {
    return {
      allTags: []
    };
  },
  props: {
    blogs: Array,
    type: String
  },
  components: {
    Essay
  },
  computed: {
    formatTag() {
      let type = "";
      switch (this.type) {
        case "tech":
          type = '1';
          break;
        case "finance":
          type = '2';
          break;
        case "thinking":
          type = '3';
          break;
        default:
          type = "";
      }
      const data = JSON.parse(JSON.stringify(this.blogs));
      data.forEach((blog, index) => {
        blog.tagsObj = [];
        const idArr = blog.tags.split(",");
        this.allTags.forEach(tag => {
          if (idArr.indexOf(tag.id.toString()) !== -1) {
            blog.tagsObj.push(tag);
          }
        });
      });
      const data2 = data.filter(item => {
        return item.tagsObj.some(item2 => {
          return type ? item2.code === type : true;
        });
      });
      return data2;
    }
  },
  created() {
    this.getAllTag();
  },
  methods: {
    async getAllTag() {
      const res = await $tags.getAllTags();
      if (res) {
        this.allTags = res;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0 10px 50px;
  box-sizing: border-box;
  min-height:800px;
}
.essay-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
