var globalVariable="This is global variable";  //全局变量
function globalFunction(){
    var localVariable="This is local variable";
    console.log('Visit global/local variable');
    console.log(globalVariable);
    console.log(localVariable);
    globalVariable="this is changed variable";
    console.log(globalVariable);
    function localFunction(){
        var innerLocalVariable="this is inner local variable";
        console.log(globalVariable);
        console.log(localVariable);
        console.log(innerLocalVariable);
    }
    localFunction();
}
globalFunction();
