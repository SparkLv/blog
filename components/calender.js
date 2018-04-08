export default class Calender {
    constructor(ele) {
        this.ele = ele;
        const now = new Date();
        const year = now.getFullYear(),
            month = now.getMonth(),
            day = now.getDate();
        this.now = [year, month, day];
        this.now2 = now;
    }
    make() {
        const table = document.createElement('table');
        table.border = '1';
        table.width = '100%';
        const caption = document.createElement('caption');
        caption.innerHTML = `${this.now[0]}年${this.now[1] + 1}月${this.now[2]}日`;
        table.appendChild(caption);
        this.ele.appendChild(table);
        const weekHead = ['一', '二', '三', '四', '五', '六', '日'];
        const weekIndex = [1, 2, 3, 4, 5, 6, 0];
        const thead = document.createElement('thead');
        weekHead.forEach(function (item) {
            const th = document.createElement('th');
            th.innerHTML = item;
            thead.appendChild(th);
        })
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        const preMonth = new Date(this.now[0], this.now[1], 0);
        const nowMonth = new Date(this.now[0], this.now[1], 1);
        const nowMonth2 = new Date(this.now[0], this.now[1] + 1, 0);
        const nextMonth = new Date(this.now[0], this.now[1] + 1, 1);
        const preMonthLast = preMonth.getDay();
        const nowMonthFirst = nowMonth.getDay();
        const nowMonthLast = nowMonth2.getDay();
        const nextMonthFirst = nextMonth.getDay();

        const index = weekIndex.indexOf(preMonthLast);

        tbody.insertRow(0);

        let firstLineLast = 6 - index;
        let nowNum = 6 - index;

        for (let j = 0; j < 7; j++) {
            tbody.rows[0].insertCell(j);
            if (j <= index) {
                // tbody.rows[0].cells[j].innerHTML = preMonth.getDate() - index + j;
            }
            else {
                tbody.rows[0].cells[j].innerHTML = j - index;
            }
        }

        for (let i = 1; i < 6; i++) {
            tbody.insertRow(i);
            for (let j = 0; j < 7; j++) {
                if (nowNum < nowMonth2.getDate()) {
                    tbody.rows[i].insertCell(j);
                    tbody.rows[i].cells[j].innerHTML = ++nowNum
                }
            }
        }
        table.appendChild(tbody);
    }
}