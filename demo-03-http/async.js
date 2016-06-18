// 异步   程序的执行顺序并不一定是代码的顺序
var c=0;
function printIt(){
    console.log(c);
}
function plus(callback){
    setTimeout(function(){
        c+=1;           //使用定时器延时后printIt输出0
        callback(c);
    },1000)
}
plus(printIt);
// JavaScript是单线程
