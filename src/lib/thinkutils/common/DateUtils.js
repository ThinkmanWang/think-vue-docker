let _DateUtils = {
    // 存储 localstorage
    func3 () {
        return "thinkutils.DateUtils.func3()";
    }
    , formatDate(time) {
        // 格式化日期，获取今天的日期
        const Dates = new Date(time);
        const year = Dates.getFullYear();
        const month = ( Dates.getMonth() + 1 ) < 10 ? '0' + ( Dates.getMonth() + 1 ) : ( Dates.getMonth() + 1 );
        const day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();

        return year + '-' + month + '-' + day;
    }
    , today() {
        return this.formatDate(new Date().getTime());
    }
}

export default _DateUtils