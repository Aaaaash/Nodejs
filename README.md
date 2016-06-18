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
