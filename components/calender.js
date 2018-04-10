import Com from '../common/common'

export default class Calender {
    constructor(ele) {
        this.ele = ele;
    }
    fullBox() {
        this.box = document.createElement('div');
        this.foot = document.createElement('div');
        this.foot.style.background = "#fff";
        this.foot.style.padding = "5px 10px";
        this.box.style.marginTop = '10px';
        this.table = document.createElement('table');
        this.table.width = '100%';
        this.table.cellSpacing = '0';
        this.table.cellPadding = '0';
        this.box.appendChild(this.table);
        this.box.appendChild(this.foot);
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
        this.makeFoot(this.getNowArr());
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
            th.style.padding = '10px 0';
            thead.appendChild(th);
        })
        this.table.appendChild(thead);
        this.makeBody(dateArr);
    }
    makeBody(dateArr) {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();
        const weekIndex = [1, 2, 3, 4, 5, 6, 0];
        const tbody = document.createElement('tbody');
        const preMonth = new Date(dateArr[0], dateArr[1], 0);
        const nowMonth = new Date(dateArr[0], dateArr[1] + 1, 0);
        const preMonthLast = preMonth.getDay();

        const index = weekIndex.indexOf(preMonthLast);

        let nowNum = 6 - index;
        const makeTd = (i, j, num) => {
            if (!(dateArr[0] === year && dateArr[1] === month && num > day)) {
                tbody.rows[i].cells[j].addEventListener('mouseover', function () {
                    this.style.background = "#eee456"
                });
                tbody.rows[i].cells[j].addEventListener('mouseout', function () {
                    this.style.background = "transparent"
                });
                tbody.rows[i].cells[j].style.cursor = 'pointer';
                tbody.rows[i].cells[j].addEventListener('click', () => {
                    alert('日期为：' + dateArr[0] + '年' + (dateArr[1] + 1) + '月' + num + '日');
                }, false);
            }
            else {
                tbody.rows[i].cells[j].style.background = '#ccc'
            }
            tbody.rows[i].cells[j].style.padding = '5px 0';
            tbody.rows[i].cells[j].style.textAlign = 'center';
        }

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
                        makeTd(i, j, j - index);
                    }
                }
                else {
                    if (nowNum < nowMonth.getDate()) {
                        tbody.rows[i].cells[j].innerHTML = ++nowNum;
                        makeTd(i, j, nowNum);
                    }
                }
            }
        }
        this.table.appendChild(tbody);
    }
    transToWeek(data) {
        const arr = ['January', 'Feberary', 'March', 'April', 'May', 'June', 'July', 'August', 'Spetember', 'October', 'Novenber', 'December'];
        if (data === 12) {
            return 'January'
        }
        else if (data === -1) {
            return 'Decemner'
        }
        else {
            return arr[data]
        }
    }
    makeFoot(arr) {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const preBtn = document.createElement('div');
        const nextBtn = document.createElement('div');
        Com.addStyle(preBtn, { float: 'left', cursor: 'pointer', fontSize: '18px' });
        Com.addStyle(nextBtn, { float: 'right', cursor: 'pointer', fontSize: '18px' });
        preBtn.innerHTML = ("< " + this.transToWeek(arr[1] - 1));
        nextBtn.innerHTML = (this.transToWeek(arr[1] + 1) + " >");
        preBtn.addEventListener('click', this.preMonth.bind(this), false);
        nextBtn.addEventListener('click', this.nextMonth.bind(this), false);
        this.foot.appendChild(preBtn);
        if (!(arr[0] === year && arr[1] === month)) {
            this.foot.appendChild(nextBtn);
        }
        const clear = document.createElement('div');
        clear.style.clear = 'both';
        this.foot.appendChild(clear);
    }
    clearTable() {
        this.table.innerHTML = '';
        this.foot.innerHTML = '';
    }
    nextMonth() {
        this.clearTable();
        const month = this.date[1];
        this.date = month === 11 ? [this.date[0] + 1, 0] : [this.date[0], month + 1];
        this.makeHead(this.date);
        this.makeFoot(this.date);
    }
    preMonth() {
        this.clearTable();
        const month = this.date[1];
        this.date = month === 0 ? [this.date[0] - 1, 11] : [this.date[0], month - 1];
        this.makeHead(this.date);
        this.makeFoot(this.date);
    }
}