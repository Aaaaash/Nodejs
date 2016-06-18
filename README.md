#nodeJS
nodeJS是一个由`C++`语言编写的基于google ChromeV8引擎的JavaScript运行环境<br/>
* 可以解析JavaScript代码
* 提供系统级别的API：
    * 1.文件的读写
    * 2.进程管理
    * 3.网络通信
* 可以运行在服务器上

##模块与包管理
当页面引入很多个js文件时，由于多个js文件可能存在依赖关系，引入的顺序不同很可能会引发错误<br/>
人为的创造命名空间来限定方法的作用域（例如jquery的方法只能通过jQuery或者$来访问）<br/>
###Commonjs规范
>Commonjs是一套规范,用来约定JavaScript的编写方式

把执行不同任务的特定的代码块或文件看做一个独立的JavaScript模块，每一个模块就有一个独立的作用域，同时每个模块也可能存在对于其他模块的依赖关系<br/>
模块的三个关键部分：<br/>
* 依赖关系  （定义）
* 命名空间  （标示）
* 代码组织  （引用）

nodeJS也基本实现了commonjs的规范<br/>
nodeJS中每个js文件被看做一个模块，每个js文件都可能存在对其他js文件的依赖关系，每个js文件都将是一个独立完整的模块

##nodeJS中模块的分类
* 核心模块  http、fs
* 文件模块  var util=require('../util.js')
* 第三方模块 var promise=require('bluebird')<br/>

`nodeJS中可以通过路径来引用模块，也可以使用文件名来引用`

>例子详见demo-02-module文件夹


##URL模块
* url.parse 解析url地址
* url.format    格式化url为一个字符串
* url.resolve
###url.parse（可以接收三个参数）
>url.parse('http://nodejs.cn:8080/doc/node/url.html?from=scott&course=node#floor1')<br/>
Url {<br/>
  protocol: 'http:',<br/>
  slashes: true,<br/>
  auth: null,<br/>
  host: 'nodejs.cn:8080',<br/>
  port: '8080',<br/>
  hostname: 'nodejs.cn',<br/>
  hash: '#floor1',<br/>
  search: '?from=scott&course=node',<br/>
  query: 'from=scott&course=node',<br/>
  pathname: '/doc/node/url.html',<br/>
  path: '/doc/node/url.html?from=scott&course=node',<br/>
  href: 'http://nodejs.cn:8080/doc/node/url.html?from=scott&course=node#floor1' }<br/>

 protocol:底层使用的协议<br/>
 slashes:是否有双斜线<br/>
 host:域名<br/>
 port:端口<br/>
 hostname：主机名<br/>
 hash：锚点<br/>
 search：查询字符串参数<br/>
 query：发送给http服务器的数据<br/>
 pathname:访问资源的路径名<br/>
 path：路径<br/>
 href：完整链接<br/>
只要是一个合法url地址都可以被parse方法解析<br/>
加上第二个参数true可以把query解析为一个对象<br/>

>url.parse('//imooc.com/course/list',true,true)<br/>
Url {<br/>
  protocol: null,<br/>
  slashes: true,<br/>
  auth: null,<br/>
  host: 'imooc.com',<br/>
  port: null,<br/>
  hostname: 'imooc.com',<br/>
  hash: null,<br/>
  search: '',<br/>
  query: {},<br/>
  pathname: '/course/list',<br/>
  path: '/course/list',<br/>
  href: '//imooc.com/course/list' }<br/>

第三个参数设为true，当没有指定协议类型时可以正确解析pathname<br/>
###url.format
>url.format({protocol: 'http:',slashes: true,auth: null,host: 'nodejs.cn:8080',port: '8080',hostname: 'nodejs.cn',hash: '#floor1',search: '?from=scott&course=node',query: 'from=scott&course=node',pathname: '/doc/node/url.html',path: '/doc/node/url.html?from=scott&course=node',href: 'http://nodejs.cn:8080/doc/node/url.html?from=scott&course=node#floor1' })<br/>
'http://nodejs.cn:8080/doc/node/url.html?from=scott&course=node#floor1'

将一个url对象格式化为一个合法的url地址
###url.resolve
>url.resolve('http://nodejs.cn/','/doc/node/url.html')
'http://nodejs.cn/doc/node/url.html'

传入两个参数，合并为一个合法的url地址

##QueryString
###序列化
把一个url参数对象序列化为一个参数字符串<br/>
第一个参数为一个url参数对象<br/>
>querystring.stringify({name:'sakura',course:['jade','node'],from:''})<br/>
'name=sakura&course=jade&course=node&from='

第二个参数为参数对象序列化后的连接符<br/>
>querystring.stringify({name:'sakura',course:['jade','node'],from:''},'^')<br/>
'name=sakura^course=jade^course=node^from='

第三个参数为key与value之间的连接符（默认=）<br/>
>querystring.stringify({name:'sakura',course:['jade','node'],from:''},'^',':')<br/>
'name:sakura^course:jade^course:node^from:'

###反序列化
第一个参数为一个序列化后的url参数字符串<br/>
>querystring.parse('name=sakura&course=jade&course=node&from=')<br/>
{ name: 'sakura', course: [ 'jade', 'node' ], from: '' }

第二个参数当url参数字符串连接符不是默认的=号时需要指出<br/>
>querystring.parse('name=sakura^course=jade^course=node^from=','^')<br/>
{ name: 'sakura', course: [ 'jade', 'node' ], from: '' }
这里参数字符串的连接符为^，第二个参数将^符号传入才能正确解析

第三个参数是当key和value的连接符不是默认的=号时需要指定的符号<br/>
>querystring.parse('name:sakura^course:jade^course:node^from:','^',':')<br/>
{ name: 'sakura', course: [ 'jade', 'node' ], from: '' }
这里参数字符串中键值对的连接符为：，参数连接符为^,所以需要传入第二个和第三个参数分别指定参数连接符与键值对连接符

第四个参数指定参数最大个数<br/>

###转义
>querystring.escape('<哈哈哈>')<br/>
'%3C%E5%93%88%E5%93%88%E5%93%88%3E'<br/>
escape方法可以将中文转义为乱码

> querystring.unescape('%3C%E5%93%88%E5%93%88%E5%93%88%3E')<br/>
'<哈哈哈>'<br/>
unescape方法可以将乱码转义为中文

##HTTP相关
>HTTP就是一种协议

-->http客户端发起请求，创建端口<br/>
-->http服务器在端口监听客户端请求<br/>
-->http服务器向客户端返回状态和内容<br/>

###访问一个网站所要经历的过程
>1.输入网址后，浏览器搜索自身的DNS缓存<br/>
2.搜索操作系统自身的DNS缓存（如果浏览器没有找到的话）<br/>
3.读取本地的host文件<br/>
4.浏览器发起一个dns的系统调用<br/>
5.浏览器获得域名对应的IP地址后，发起HTTP三次握手<br/>
####http三次握手
>>第一次握手：建立连接。客户端发送连接请求报文段，将SYN位置为1，Sequence Number为x；然后，客户端进入SYN_SEND状态，等待服务器的确认；<br/>
第二次握手：服务器收到SYN报文段。服务器收到客户端的SYN报文段，需要对这个SYN报文段进行确认，设置Acknowledgment Number为x+1(Sequence Number+1)；同时，自己自己还要发送SYN请求信息，将SYN位置为1，Sequence Number为y；服务器端将上述所有信息放到一个报文段（即SYN+ACK报文段）中，一并发送给客户端，此时服务器进入SYN_RECV状态；<br/>
第三次握手：客户端收到服务器的SYN+ACK报文段。然后将Acknowledgment Number设置为y+1，向服务器发送ACK报文段，这个报文段发送完毕以后，客户端和服务器端都进入ESTABLISHED状态，完成TCP三次握手。<br/>

>6.TCP/IP链接建立起来后，浏览器就可以向服务器发送http请求了<br/>
7.服务器端接收到请求，经过后端的处理，把处理后的结果返回给浏览器<br/>
8.浏览器拿到了网站完整的html页面代码。开始解析渲染页面，页面中所需要的js、css图片等文件同样也需要经过http请求来获取<br/>

HTTP协议粗浅的可以分为一个请求和一个响应，都包括http头和正文信息<br/>

>http头：包含一些附加信息，包括内容类型、服务器发送相应的日期、http状态码等<br/>
正文：就是用户提交的表单数据

##HTTP模块
作用域和上下文<br/>
作用域决定了变量和函数是否可以被调用<br/>
上下文只与this相关<br/>
