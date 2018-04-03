import './index.scss';
import '../common/common.scss';

function colorTags() {
    const tags = document.getElementsByClassName('bar-tag');
    const tagsArr = Array.prototype.slice.call(tags);
    tagsArr.forEach(function (item) {
        if (item.firstChild.innerHTML === "Webpack") {
            item.style.backgroundColor = 'skyblue';
        }
    })
}

window.onload = function () {
    colorTags();
}