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

Com.domReady(function () {
    colorTags();
    loadingImg();
});