<template>
  <article class="essay-page">
    <ImgBox></ImgBox>
    <ToolBar></ToolBar>
    <div class="container">
      <Essay :text="text"></Essay>
      <AsideNav></AsideNav>
    </div>
    <ReadMoreBtn></ReadMoreBtn>
  </article>
</template>
<script>
import Essay from "./components/essay";
import ImgBox from "./components/imgBox";
import ToolBar from "./components/toolBar";
import AsideNav from "./components/asideNav";
import ReadMoreBtn from './components/readMoreBtn'
import axios from "axios";
export default {
  asyncData() {
    return axios.get("http://localhost:3000/test.md").then(res => {
      return {
        text: res.data
      };
    });
  },
  data() {
    return {
      text: ""
    };
  },
  components: {
    Essay,
    AsideNav,
    ImgBox,
    ToolBar,
    ReadMoreBtn,
  }
};
</script>
<style  scoped>
.container {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 1200px) {
  .container {
    flex-direction: column;
  }
}
</style>

