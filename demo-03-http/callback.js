// 关于回调
function learn(something){
    console.log(something);
}
function we(callback,something){
    something+=' is coll!';
    callback(something);
}
we(learn,'nodeJS');
we(function(something){
    console.log(something)
},'JavaScript')
