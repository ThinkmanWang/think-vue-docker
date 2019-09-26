import _DateUtils from "./common/DateUtils"

let thinkutils = {
    // 存储 localstorage
    func1 () {
        return "thinkutils.func1()";
    }

    // 获取 localstorage
    , func2 () {
        return "thinkutils.func2()";
    }

    , DateUtils: _DateUtils
}

export default thinkutils