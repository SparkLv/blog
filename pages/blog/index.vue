<template>
    <article>
        <Head :type="type" />
        <section class="content">

        </section>
    </article>
</template>
<script>
import Head from "./components/head";
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
    Head
  },
  beforeRouteUpdate(to, from, next) {
    this.type = to.query.type;
    next();
  },
  mounted() {
    console.log(this.type);
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 2000px;
  background: #fff;
}
</style>
