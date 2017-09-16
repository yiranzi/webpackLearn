/**
 * Created by wuchuck on 6/24/17.
 */
var moment = require('moment');
document.write('it work');
document.write(require('../my'));
document.write(moment().format());
console.log(moment().format());

function determineDate() {
    require.ensure([], function(require) {
        var moment = require('moment');
        console.log(moment().format());
    });
}

determineDate();
