import Com from "../../../common/common";
import '../../../common/common.scss'
import hljs from "highlight.js";
import 'highlight.js/styles/agate.css'

Com.domReady(function() {
  const arr = Array.prototype.slice.call(document.querySelectorAll("pre code"));
  arr.forEach((block, i) => {
    hljs.highlightBlock(block);
  });
});