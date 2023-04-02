import wuiLimit from'./wui-limit.js'
const install = function (app) {
    app.directive(...wuiLimit)
}
export default {
    install
}