Date.prototype.addDaysToCurrentDay = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};
window.onload = function () {
    var currentDate = new Date();
    console.log(currentDate);
    console.log(currentDate.addDaysToCurrentDay(3));
};
