<template>
    <div v-html="text">
        <!-- {{text}}` -->
    </div>
</template>
<script>
import marked from "marked";
export default {
  data() {
    return {
      text: ""
    };
  },
  mounted() {
    this.text = marked(
      `'# Marked in the browser\n\nRendered by **marked**.'`,
      { breaks: true }
    );
  }
};
</script>
<style lang="scss" scoped>
</style>

