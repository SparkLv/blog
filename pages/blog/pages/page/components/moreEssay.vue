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
            <footer class="foot">
                <span class="date">2018-06-22</span>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tagArr: [
        { text: "HTML", color: "#fff", bgColor: "skyblue" },
        { text: "CSS", color: "#eee", bgColor: "skyblue" },
        { text: "Javascript", color: "#eee", bgColor: "skyblue" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/common/styles/libary.scss";

$essay-box-width: 250px !default;

.box {
  width: $essay-box-width;
  height: 250px;
  display: inline-block;
  border-radius: 4px 4px 0 0;
  margin: 10px;
  overflow: hidden;
  background: #fff;
  .img {
    width: 100%;
    height: 150px;
    cursor: pointer;
    background: url("/react.jpg") center/cover;
  }
  .content {
    border: 1px solid #f4f4f4;
    border-top: none;
    height: 120px;
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
    .foot {
      display: flex;
      justify-content: space-between;
      .date {
        font-size: 14px;
        line-height: 28px;
      }
    }
  }
}
</style>