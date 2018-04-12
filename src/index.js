import "./index.scss";
import "../common/common.scss";
import Com from "../common/common";
import tagColor from "../common/tagColor";
import barImg from "../common/barImg";
import calender from "../components/calender";

function colorTags() {
  const tags = document.getElementsByClassName("tag-link");
  const tagsArr = Array.prototype.slice.call(tags);
  tagsArr.forEach(function(item) {
    Com.setCss(item.parentNode, {
      backgroundColor: tagColor[item.innerText][0]
    });
    Com.setCss(item, { color: tagColor[item.innerText][1] });
  });
}

function loadingImg() {
  const imgs = document.querySelectorAll(".bar-img");
  for (let i = 0, len = imgs.length; i < len; i++) {
    if (imgs[i].complete) {
      imgs[i].parentNode.style.display = "block";
      imgs[i].parentNode.parentNode.querySelector(".loading-img-box");
      imgs[i].parentNode.parentNode.querySelector(
        ".loading-img-box"
      ).style.display =
        "none";
    }
    imgs[i].onload = function() {
      this.parentNode.style.display = "block";
      this.parentNode.parentNode.querySelector(".loading-img-box");
      this.parentNode.parentNode.querySelector(
        ".loading-img-box"
      ).style.display =
        "none";
    };
  }
}

function rankTab() {
  const readMost = document.getElementsByClassName("read-most")[0];
  const newMost = document.getElementsByClassName("new-most")[0];
  const tabs = document.getElementsByClassName("rank-tab-item");
  tabs[0].addEventListener("click", function() {
    if (!Com.hasClass(this.className, "active")) {
      this.className = Com.addClass(this.className, "active");
      tabs[1].className = Com.removeClass(tabs[1].className, "active");
      readMost.style.display = "block";
      newMost.style.display = "none";
    }
  });
  tabs[1].addEventListener("click", function() {
    if (!Com.hasClass(this.className, "active")) {
      this.className = Com.addClass(this.className, "active");
      tabs[0].className = Com.removeClass(tabs[0].className, "active");
      readMost.style.display = "none";
      newMost.style.display = "block";
    }
  });
}

function createImg(start, end) {
  const imgBoxes = document.getElementsByClassName("img-box");
  const imgArr = Array.prototype.slice.call(imgBoxes);
  for (let i = start; i < end; i++) {
    let img = new Image();
    img.src = barImg[i].url;
    img.alt = barImg[i].alt;
    img.className = "bar-img";
    imgArr[i].parentNode.parentNode.parentNode.style.display = "block";
    imgArr[i].appendChild(img);
  }
  loadingImg();
}

let carouselInter;

function carousel() {
  const imgs = document.getElementsByClassName("header-img");
  const imgsArr = Array.prototype.slice.call(imgs);
  const imgBtn = document.getElementsByClassName("img-btn");
  const imgBtnArr = Array.prototype.slice.call(imgBtn);
  const imgTitle = document.getElementsByClassName("img-title");
  let index = 0;

  imgBtnArr.forEach(function(item, index1) {
    item.onclick = function() {
      clearInterval(carouselInter);
      index = index1;
      imgsArr.forEach(function(item1, index2) {
        item1.className = Com.removeClass(item1.className, "head-img-show");
        imgTitle[index2].style.display = "none";
      });

      imgBtnArr.forEach(function(item2) {
        item2.style.background = "transparent";
      });

      imgBtnArr[index].style.background = "#000";

      imgsArr[index].className = Com.addClass(
        imgsArr[index].className,
        "head-img-show"
      );
      imgTitle[index].style.display = "block";
      carouselInter = setInterval(function() {
        imgsArr.forEach(function(item, index3) {
          item.className = Com.removeClass(item.className, "head-img-show");
          imgTitle[index3].style.display = "none";
        });
        index = index < 2 ? index + 1 : 0;
        imgsArr[index].className = Com.addClass(
          imgsArr[index].className,
          "head-img-show"
        );
        imgTitle[index].style.display = "block";

        imgBtnArr.forEach(function(item2) {
          item2.style.background = "transparent";
        });

        imgBtnArr[index].style.background = "#000";
      }, 5000);
    };
  });

  carouselInter = setInterval(function() {
    imgsArr.forEach(function(item, index4) {
      item.className = Com.removeClass(item.className, "head-img-show");
      imgTitle[index4].style.display = "none";
    });
    index = index < 2 ? index + 1 : 0;
    imgsArr[index].className = Com.addClass(
      imgsArr[index].className,
      "head-img-show"
    );
    imgTitle[index].style.display = "block";
    imgBtnArr.forEach(function(item2) {
      item2.style.background = "transparent";
    });

    imgBtnArr[index].style.background = "#000";
  }, 5000);
}

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

function setPos() {
  let posObj = { width: 0, height: [0, 0, 0] };
  const content = document.getElementsByClassName("content")[0];
  const bar = document.getElementsByClassName("one-bar");
  const barArr = Array.prototype.slice.call(bar);
  let lastHeight = [0, 0, 0];
  barArr.forEach((item, index) => {
    let pos = (index + 1) % 3 - 1;
    if (pos === -1) {
      pos = 2;
    }
    item.style.left = posObj.width + 10 + "px";
    if (pos === 2) {
      posObj.width = 0;
    } else {
      posObj.width += item.scrollWidth + 10;
    }
    item.style.top = posObj.height[pos] + 10 + "px";
    posObj.height[pos] += item.scrollHeight + 10;
  });
  content.style.height = posObj.height[0] + 100 + "px";
}

Com.domReady(function() {
  let imgStart = 0;
  const loadingMore = document.getElementsByClassName("loading-more")[0];
  const loadingMoreBtn = document.getElementsByClassName("loading-more-btn")[0];
  const toTopBtn = document.getElementsByClassName("to-top")[0];
  toTopBtn.onclick = runToTop;
  colorTags();
  createImg(imgStart, imgStart + 6);
  rankTab();
  carousel();
  setPos();
  function scroll1() {
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 10
    ) {
      imgStart += 6;
      window.onscroll = null;
      if (imgStart + 6 >= barImg.length) {
        loadingMore.style.display = "block";
        setTimeout(function() {
          loadingMore.style.display = "none";
          createImg(imgStart, barImg.length - 1);
        }, 2000);
      } else {
        loadingMore.style.display = "block";
        setTimeout(function() {
          loadingMore.style.display = "none";
          createImg(imgStart, imgStart + 6);
          window.onscroll = scroll1;
        }, 2000);
      }
    }
  }
  window.onscroll = toTop;
  // window.onscroll = scroll1
  loadingMoreBtn.onclick = function() {
    imgStart += 6;
    if (imgStart + 6 >= barImg.length) {
      loadingMoreBtn.style.display = "none";
      loadingMore.style.display = "block";
      setTimeout(function() {
        loadingMore.style.display = "none";
        createImg(imgStart, barImg.length - 1);
        setPos();        
      }, 1000);
    } else {
      loadingMoreBtn.style.display = "none";
      loadingMore.style.display = "block";
      setTimeout(function() {
        loadingMoreBtn.style.display = "inline-block";
        loadingMore.style.display = "none";
        createImg(imgStart, imgStart + 6);
        setPos();
      }, 1000);
    }
  };
});

window.onload = function() {
  const ele = document.getElementsByClassName("calender-box")[0];
  let cal = new calender(ele);
  cal.make();
};
