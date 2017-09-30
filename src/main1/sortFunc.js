/**
 * Created by wuchuck on 2017/9/30.
 */


export default function init() {
    //TEST SORT
    let a =[
        {name:'股票',value:'0'},
        {name:'7天',value:'1'},
        {name:'14天',value:'2'},
    ];
    let b = a.sort((first,second)=>{
        return first.value - second.value;
        // if(first.value > second.value) {
        //     return -1
        // } else {
        //     return 1
        // }    });
    console.log(b)
}
