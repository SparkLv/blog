<template>
    <div @click="$emit('click')" class="text">Spark's Blog</div>
</template>
<style lang="scss" scoped>
.text {
  cursor: default;
  color: #fff;
  border: 1.5px solid #fff;
  padding: 10px;
  border-radius: 4px;
  font-size:18px;
}
</style>
