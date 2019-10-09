const $ = require('jquery');//首先运行npm init 初始化，然后直接写模块名字，它默认先从内置模块，再从node_modules的文件夹里面找
// 从package.json里面获取main字段的路径，然后把jquery.js模块引入进来
console.log($);
