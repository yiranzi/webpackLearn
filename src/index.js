var echarts = require('echarts');
console.log('start');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
var data = [18.3, 22.3,18.7,19.4,22,22,30,25,25,27,31,32,33,41,39,38];
var month = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
var count = 1
setInterval(function() {
    var array = [];
    var monthArray = [];
    array = data.slice(0,count);
    monthArray = month.slice(0,count);
    count++;
    myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltipnpm
            : {},
        xAxis: {
            data: monthArray,
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            data: array,
        }]
    });
},1000)
