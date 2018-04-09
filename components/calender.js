export default class Calender {
    constructor(ele) {
        this.ele = ele;
    }
    fullBox() {
        this.box = document.createElement('div');
        this.box.style.marginTop = '10px';
        this.table = document.createElement('table');
        this.table.width = '100%';
        this.table.cellSpacing = '0';
        this.table.cellPadding = '0';
        this.box.appendChild(this.table);
        this.ele.appendChild(this.box);
    }
    getNowArr() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        this.date = [year, month];
        return this.date;
    }
    make() {
        this.fullBox();
        this.getNowArr();
        this.makeHead();
        this.makeFoot();
    }
    makeHead(dateArr = this.getNowArr()) {
        const caption = document.createElement('caption');
        caption.style.background = '#f08035';
        caption.style.color = '#fff';
        caption.style.padding = '10px';
        caption.innerHTML = `${dateArr[0]}年${dateArr[1] + 1}月`;
        this.table.appendChild(caption);
        const thead = document.createElement('thead');
        thead.style.background = '#f1b681';
        thead.style.color = '#fff';
        const weekHead = ['一', '二', '三', '四', '五', '六', '日'];
        weekHead.forEach(function (item) {
            const th = document.createElement('th');
            th.innerHTML = item;
            th.style.padding = '5px 0';
            thead.appendChild(th);
        })
        this.table.appendChild(thead);
        this.makeBody(dateArr);
    }
    makeBody(dateArr) {
        const weekIndex = [1, 2, 3, 4, 5, 6, 0];
        const tbody = document.createElement('tbody');
        const preMonth = new Date(dateArr[0], dateArr[1], 0);
        const nowMonth = new Date(dateArr[0], dateArr[1] + 1, 0);
        const preMonthLast = preMonth.getDay();

        const index = weekIndex.indexOf(preMonthLast);

        let nowNum = 6 - index;

        for (let i = 0; i < 6; i++) {
            tbody.insertRow(i);
            if (i % 2) {
                tbody.rows[i].style.background = '#f3f3f3';
            }
            else {
                tbody.rows[i].style.background = '#f9f9f9';
            }
            for (let j = 0; j < 7; j++) {
                tbody.rows[i].insertCell(j);
                if (i === 0) {
                    if (j > index) {
                        tbody.rows[i].cells[j].innerHTML = j - index;
                    }
                    else {
                        tbody.rows[i].cells[j].innerHTML = '';
                    }
                }
                else {
                    if (nowNum < nowMonth.getDate()) {
                        tbody.rows[i].cells[j].innerHTML = ++nowNum
                    }
                    else {
                        tbody.rows[i].cells[j].innerHTML = ''
                    }
                }
                tbody.rows[i].cells[j].style.padding = '5px 0';
                tbody.rows[i].cells[j].style.textAlign = 'center';
            }
        }
        this.table.appendChild(tbody);
    }
    makeFoot() {
        const foot = document.createElement('div');
        const preBtn = document.createElement('div');
        const nextBtn = document.createElement('div');
        preBtn.style.float = 'left';
        preBtn.style.cursor = 'pointer'
        nextBtn.style.float = 'right';
        nextBtn.style.cursor = 'pointer'
        preBtn.innerHTML = "<";
        nextBtn.innerHTML = ">";
        preBtn.addEventListener('click', this.preMonth.bind(this), false);
        nextBtn.addEventListener('click', this.nextMonth.bind(this), false);
        foot.appendChild(preBtn);
        foot.appendChild(nextBtn);
        this.box.appendChild(foot);
    }
    clearTable() {
        this.table.innerHTML = '';
    }
    nextMonth() {
        this.clearTable();
        const month = this.date[1];
        this.date = month === 11 ? [this.date[0] + 1, 0] : [this.date[0], month + 1];
        this.makeHead(this.date);
    }
    preMonth() {
        this.clearTable();
        const month = this.date[1];
        this.date = month === 0 ? [this.date[0] - 1, 11] : [this.date[0], month - 1];
        this.makeHead(this.date);
    }
}