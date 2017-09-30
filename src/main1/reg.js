//        var pattern1 = /[A-Z][a-z][0-9]/g;
var pattern2 = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;
//        var testS = 'www.a.cpm?a=0&b=%E6%88%91%E7%88%B1%E4%BD%A0&a=0&d';
var testS = 'http://localhost:63342/webpackTest/dist/index.html?_ijt=96be0br5573g8o90lb19jtdks4';
var resultAll = testS.match(pattern2);
console.log(resultAll);
//        var result = pattern1.exec(testS);
//        console.log(result);
//        console.log(resultAll);
