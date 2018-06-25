<template>
    <aside class="aside">
        <h4>更多推荐</h4>
        <nav class="more-essay-box">
            <MoreEssay v-for="item in 6" :key="item"></MoreEssay>
        </nav>
        <h4>留言给我</h4>
        <CommentPanel></CommentPanel>
    </aside>
</template>
<script>
import MoreEssay from "./moreEssay";
import CommentPanel from './commentPanel'
export default {
  components: {
    MoreEssay,
    CommentPanel
  }
};
</script>
<style lang="scss" scoped>
.aside {
  flex: 1;
  padding: 20px;
}
.aside > h4 {
  font-size: 20px;
}
@media screen and (max-width: 1200px) {
  .aside {
    padding-left: 80px;
  }
}
</style>
