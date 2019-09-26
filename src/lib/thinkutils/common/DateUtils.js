let _DateUtils = {
    date2str(x, y) {
        var z = {
            M: x.getMonth() + 1,
            d: x.getDate(),
            h: x.getHours(),
            m: x.getMinutes(),
            s: x.getSeconds()
        };

        y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
            return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2);
        });
    
        return y.replace(/(y+)/g, function(v) {
            return x.getFullYear().toString().slice(-v.length);
        });
    }
    , today() {
        return this.date2str(new Date(), "yyyy-MM-dd");
    }
    , now() {
        return this.date2str(new Date(), "yyyy-MM-dd hh:mm:ss");
    }
    , timestamp() {
        return Date.now();
    }
    , diffDate(nNum) {
        var nTimestamp = Date.now() + nNum * 3600 * 1000 * 24;
        return this.date2str(new Date(nTimestamp), "yyyy-MM-dd")
    }
    , firstDayOfMonth(szDate) {
        var date = new Date(szDate);
        var y = date.getFullYear()
        var m = date.getMonth();
        var firstDay = new Date(y, m, 1);

        return this.date2str(firstDay, "yyyy-MM-dd");
    }
    , lastDayOfMonth(szDate) {
        var date = new Date(szDate);
        var y = date.getFullYear();
        var m = date.getMonth();
        var lastDay = new Date(y, m + 1, 0);

        return this.date2str(lastDay, "yyyy-MM-dd");
    }
    , test() {
        window.console.log(this.today());
        window.console.log(this.now());
        window.console.log(this.timestamp());
        window.console.log("First day: " + this.firstDayOfMonth(this.today()));
        window.console.log("Last day: " + this.lastDayOfMonth(this.today()));

        window.console.log("First day: " + this.firstDayOfMonth("2019-12-25"));
        window.console.log("Last day: " + this.lastDayOfMonth("2019-12-25"));

        for (var i = -30; i <= 31; ++i) {
            window.console.log("Diff Date: " + i + " ==> " + this.diffDate(i));
        }
    }
}

export default _DateUtils