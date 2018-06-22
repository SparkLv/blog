<template>
    <article>
        <Head :type="type" />
        <EssayBox></EssayBox>
        <Bottom></Bottom>
    </article>
</template>
<script>
import Head from "./components/head";
import EssayBox from "./components/essayBox";
import Bottom from "./components/bottom";
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
    EssayBox,
    Bottom
  },
  beforeRouteUpdate(to, from, next) {
    this.type = to.query.type;
    next();
  }
};
</script>
<style lang="scss" scoped>
</style>
