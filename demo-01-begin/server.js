var http=require('http');       //加载http模块，可以创建web服务器以及处理http相关任务
var server=http.createServer(function(req,res){       //createServer可以创建一个服务器
    // req请求体    res响应体
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello nodeJS\n');
});
server.listen(1337,'127.0.0.1');                //监听1337端口
console.log('Server running at http://127.0.0.1:1337');
