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
* 第三方模块 var promise=require('bluebird')
`nodeJS中可以通过路径来引用模块，也可以使用文件名来引用`
>例子详见demo-02-module文件夹
