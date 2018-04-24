import Com from "../../../common/common";
import "../../../common/article.scss";
import "../../../common/component.scss";
import hljs from "highlight.js";
import "highlight.js/styles/agate.css";

function toTop() {
  const top = document.documentElement.scrollTop;
  const btn = document.getElementsByClassName("to-top")[0];
  btn.style.display = top > 300 ? "block" : "none";
}

function runToTop() {
  const top = document.documentElement.scrollTop;
  const per = Math.floor(top / 20);
  const handleCyc = setInterval(function() {
    if (document.documentElement.scrollTop < per) {
      document.documentElement.scrollTop = 0;
      clearInterval(handleCyc);
    } else {
      document.documentElement.scrollTop =
        document.documentElement.scrollTop - per;
    }
  }, 20);
}

Com.domReady(function() {
  const arr = Array.prototype.slice.call(document.querySelectorAll("pre code"));
  arr.forEach((block, i) => {
    hljs.highlightBlock(block);
  });
  const toTopBtn = document.getElementsByClassName("to-top")[0];
  toTopBtn.onclick = runToTop;
  window.onscroll = toTop;
  const backBtn = document.getElementsByClassName("back-btn")[0];
  backBtn.addEventListener(
    "click",
    function() {
      history.go(-1);
    },
    false
  );
});
