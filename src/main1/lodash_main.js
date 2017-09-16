/**
 * Created by wuchuck on 9/16/17.
 */
import _ from "lodash";
import './style.css'
console.log('1234');
sun();
function sun() {
    console.log(_)
    console.log(this)
}

function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('test');

    return element;
}

document.body.appendChild(component());