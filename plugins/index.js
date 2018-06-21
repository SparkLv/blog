import Vue from "vue";

import Logo from "../components/global/logo";

Vue.component("Logo", Logo);

(function() {
  function setHTMLFontSize() {
    const width = document.documentElement.clientWidth;
    const fontSize = (16 * width) / 1400;
    document.body.style.fontSize = fontSize + "px";
  }
  window.addEventListener("resize", setHTMLFontSize, false);
})();
