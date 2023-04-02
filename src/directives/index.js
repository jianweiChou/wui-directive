import wuiLimit from './wui-limit';
const directives = [wuiLimit]
const install = function (app) {
    directives.forEach((directive) => {
        app.use(directive)
    })
}
export default {
    install
}