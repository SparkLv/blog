<template>
    <div :style="{background:bgColor,color:color}" class="tag-box">{{text}}</div>
</template>
<script>
export default {
  props: {
    text: String,
    bgColor: String,
    color: String
  }
};
</script>
<style lang="scss" scoped>
.tag-box {
  cursor: pointer;
  font-size: 1rem;
  display: inline-block;
  padding: 6px;
  margin: 0 2px;
  border-radius: 4px;
}
</style>
