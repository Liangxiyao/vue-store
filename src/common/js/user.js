
export function checkVal(val, callback) {
    let value = val.replace(/(^\s*)|(\s*$)/g, "");
    if (value == '') {
        alert('请输入账号')
    } else {
        callback(value)
    }
}