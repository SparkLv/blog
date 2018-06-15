<template>
    <div>
        <span>{{text}}</span>
        <button @click="changeText">切换</button>
    </div>
</template>
<script>
export default {
  asyncData({ query }) {
    return { x: query };
  },
  data() {
    return {
      text: "aaaaa"
    };
  },
  mounted() {
    console.log(this.x);
  },
  methods: {
    changeText() {
      if (this.text === "aaaaa") {
        this.text = "bbbb";
      } else {
        this.text = "aaaaa";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
