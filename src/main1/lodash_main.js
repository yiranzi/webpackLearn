/**
 * Created by wuchuck on 9/16/17.
 */
import _ from "lodash";
import './style.css'

import my from "../main1/sortFunc"
my()
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('test');

    btn.innerHTML = 'click';

    element.appendChild(btn)

    return element;
}

// document.body.appendChild(component());