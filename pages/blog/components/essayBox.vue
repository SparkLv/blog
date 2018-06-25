<template>
    <section class="content">
        <div class="essay-box">
            <Essay></Essay>
            <Essay></Essay>
            <Essay></Essay>
            <Essay></Essay>
            <Essay></Essay>
            <Essay></Essay>
            <Essay></Essay>
            <Essay></Essay>
            <Essay></Essay>
            <Essay></Essay>
            <Essay></Essay>
        </div>
    </section>
</template>
<script>
import Essay from "./essay";
export default {
  components: {
    Essay
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  padding:0 10px 50px;
  box-sizing:border-box;
  background: #f5f6f7;
}
.essay-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
