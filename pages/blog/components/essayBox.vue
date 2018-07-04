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
    blogs: Array
  },
  components: {
    Essay
  },
  computed: {
    formatTag() {
      const data = JSON.parse(JSON.stringify(this.blogs));
      data.forEach(blog => {
        blog.tagsObj = [];
        const idArr = blog.tags.split(",");
        this.allTags.forEach(tag => {
          if (idArr.indexOf(tag.id.toString()) !== -1) {
            blog.tagsObj.push(tag);
          }
        });
      });
      return data;
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
  background: #f5f6f7;
}
.essay-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
