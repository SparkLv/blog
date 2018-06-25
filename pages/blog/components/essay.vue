<template>
  <div class="box">
    <a href="/blog/pages/page">
      <div class="img"></div>
    </a>
    <div class="content">
      <header class="head">
        <h3>
          <a href="/blog/pages/page">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</a>
        </h3>
      </header>
      <section class="desc">这是一段描述性文字这是一段描述性文字这是一段描述性文字这是一段描述性文字这是一段描述性文字这是一段描述性文字这是一段描述性文字这是一段描述性文字</section>
      <footer class="foot">
        <span class="date">2018-06-22</span>
        <div class="tag-group">
          <Tag v-for="item in tagArr" :key="item.text" :text="item.text" :color="item.color" :bgColor="item.bgColor"></Tag>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import Tag from "./tag";
export default {
  data() {
    return {
      tagArr: [
        { text: "HTML", color: "#fff", bgColor: "skyblue" },
        { text: "CSS", color: "#eee", bgColor: "skyblue" },
        { text: "Javascript", color: "#eee", bgColor: "skyblue" }
      ]
    };
  },
  components: {
    Tag
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/common/styles/libary.scss";

$essay-box-width: 370px !default;

.box {
  width: $essay-box-width;
  height: 400px;
  display: flex;
  border-radius: 4px 4px 0 0;
  margin: 10px;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  .img {
    width: 100%;
    height: 180px;
    cursor: pointer;
    background: url("/react.jpg") center/cover;
  }
  .content {
    border: 1px solid #f4f4f4;
    border-top: none;
    height: 220px;
    box-sizing: border-box;
    padding: 0 10px;
    .head {
      height: 40px;
      h3 {
        font-size: 1.2rem;
        width: 100%;
        @extend %overflow-ellipsis;
        a {
          color: #000;
        }
      }
    }
    .desc {
      font-size: 13px;
      color: #8a8a8a;
      line-height: 24px;
      height: 125px;
    }
    .foot {
      display: flex;
      justify-content: space-between;
      .date {
        font-size: 14px;
        line-height: 28px;
      }
      .tag-group {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .box {
    width: 80%;
  }
}
</style>
