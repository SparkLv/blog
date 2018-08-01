<template>
    <div class="blog-box-nav">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/blog">
                <a href="/blog">ALL BLOG</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item v-if="nowTag">{{nowTag}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
  props: {
    tags: Array
  },
  computed: {
    nowTag() {
      const tagId = this.$route.query.tagId;
      if (tagId) {
        let tag = "";
        this.tags.forEach(item => {
          if (item.id == tagId) {
            tag = item.name;
          }
        });
        return tag;
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-box-nav {
  padding: 0 20px;
}
</style>

