// 指令的定义
import {
    Notification,
    // MessageBox,
    // Loading
} from 'element-ui';
export default [
    'wui-limit',
    {
        inserted: function (el, binding) {
            let isComposing = false;
            el.addEventListener('compositionstart', () => {
                isComposing = true;
            });
            el.addEventListener('compositionend', (e) => {
                isComposing = false;
                const event = new Event('input');
                Object.defineProperty(event, 'target', {
                    value: e.currentTarget,
                    enumerable: true
                });
                el.dispatchEvent(event);
            });
            const {
                value: maxlength
            } = binding;
            el.addEventListener('input', (event) => {
                const element = event.target;
                if (!isComposing) {
                    if (event.target.value.length > maxlength) {
                        element.value = element.value.substring(0, maxlength);

                        Notification({ message: `${element.name ? '【' + element.name + '】' : ''}长度不能超过${maxlength}`, title: '提示' })
                        el.dispatchEvent(new Event('input'));
                    }
                }
            });
        }
    }
]
