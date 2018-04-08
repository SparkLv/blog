export default class Calender {
    constructor($ele) {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();
        this.$ele = $ele;
    }
    
    make() {
        let table = document.createElement('Table');
        this.$ele.innerHTML = '日历'
    }
}