import './index.scss';
import '../common/common.scss';
import Com from '../common/common'
import tagColor from '../common/tagColor'

function colorTags() {
    const tags = document.getElementsByClassName('tag-link');
    const tagsArr = Array.prototype.slice.call(tags);
    tagsArr.forEach(function (item) {
        Com.setCss(item.parentNode, { 'backgroundColor': tagColor[item.innerText][0] });
        Com.setCss(item, { 'color': tagColor[item.innerText][1] });
    })
}

function loadingImg() {
    const imgs = document.querySelectorAll('.bar-img');
    for (let i = 0, len = imgs.length; i < len; i++) {
        if (imgs[i].complete) {
            imgs[i].parentNode.style.display = 'block';
            imgs[i].parentNode.parentNode.querySelector('.loading-img-box');
            imgs[i].parentNode.parentNode.querySelector('.loading-img-box').style.display = 'none';
        }
        imgs[i].onload = function () {
            this.parentNode.style.display = 'block';
            this.parentNode.parentNode.querySelector('.loading-img-box');
            this.parentNode.parentNode.querySelector('.loading-img-box').style.display = 'none';
        }
    }
}

function rankTab() {
    const readMost = document.getElementsByClassName('read-most')[0];
    const newMost = document.getElementsByClassName('new-most')[0];
    const tabs = document.getElementsByClassName('rank-tab-item');
    tabs[0].addEventListener('click', function () {
        if (!Com.hasClass(this.className, 'active')) {
            this.className = Com.addClass(this.className, 'active');
            tabs[1].className = Com.removeClass(tabs[1].className, 'active');
            readMost.style.display = 'block';
            newMost.style.display = 'none';
        }
    })
    tabs[1].addEventListener('click', function () {
        if (!Com.hasClass(this.className, 'active')) {
            this.className = Com.addClass(this.className, 'active');
            tabs[0].className = Com.removeClass(tabs[0].className, 'active');
            readMost.style.display = 'none';
            newMost.style.display = 'block';
        }
    })
}

Com.domReady(function () {
    colorTags();
    loadingImg();
    rankTab();
});