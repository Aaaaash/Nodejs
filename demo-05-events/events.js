var EventEmitter=require('events').EventEmitter;
var life=new EventEmitter();

// addEventListener         一个事件默认只能添加10个事件监听函数
life.setMaxListeners(11);       //事件监听函数数量可以设置
function daoshui(who){
    console.log('给'+who+'倒水');
}

life.on('ev1',daoshui);
life.on('ev1',function(who){
    console.log('给'+who+'揉肩');
});
life.on('ev1',function(who){
    console.log('给'+who+'捶腿');
});
life.on('ev1',function(who){
    console.log('给'+who+'做饭');
});
life.on('ev1',function(who){
    console.log('给'+who+'洗衣服');
});
life.on('ev1',function(who){
    console.log('给'+who+'喂饭');
});
life.on('ev1',function(who){
    console.log('给'+who+'洗脚');
});
life.on('ev1',function(who){
    console.log('给'+who+'搓澡');
});
life.on('ev1',function(who){
    console.log('给'+who+'洗碗');
});
life.on('ev1',function(who){
    console.log('给'+who+'买衣服');
});
life.on('ev1',function(who){
    console.log('给'+who+'11');
});
life.on('ev2',function(who){
    console.log('给'+who+'12');
});
life.on('ev2',function(who){
    console.log('给'+who+'13');
});
life.removeListener('ev1',daoshui);                     //删除事件监听函数
life.removeAllListeners();              //删除所有事件监听函数（所有事件）
life.removeAllListeners('ev2');
// removeAllListeners函数不带参数表示删除所有事件的所有事件监听函数，带参数表示只删除指定事件的监听函数
var hasConfortListener=life.emit('ev1',daoshui('秀毛毛'));      //life.emit用于触发事件 返回布尔值表示事件是否有监听函数
var hasHeheListener=life.emit('ev3','呵呵')
life.emit('ev2','秀萌萌');
console.log(life.listeners('ev1').length);          //得到指定事件绑定的事件监听函数数量 listeners对象保存指定事件的所有事件监听函数
console.log(life.listeners('ev2'));
console.log(hasConfortListener);
console.log(hasHeheListener);
