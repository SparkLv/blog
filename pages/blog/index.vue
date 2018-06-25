<template>
    <article>
        <Head :type="type" />
        <EssayBox></EssayBox>
    </article>
</template>
<script>
import Head from "./components/head";
import EssayBox from "./components/essayBox";
export default {
  asyncData({ query }) {
    return { type: query.type || "" };
  },
  data() {
    return {
      type: ""
    };
  },
  components: {
    Head,
    EssayBox
  },
  beforeRouteUpdate(to, from, next) {
    this.type = to.query.type;
    next();
  }
};
</script>
<style lang="scss" scoped>
</style>
