import wuiLimit from './wui-limit';
import 'element-ui/lib/theme-chalk/index.css';
const directives = [wuiLimit]
const install = function (app) {
    directives.forEach((directive) => {
        app.use(directive)
    })
}
export default {
    install
}
