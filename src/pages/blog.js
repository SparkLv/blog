console.log('sssssss');

window.onload = function () {
    let btn = document.getElementById('check-btn');
    btn.onclick = function () {
        console.log(navigator.userAgent.toLowerCase().indexOf('micromessenger'));
    }
}