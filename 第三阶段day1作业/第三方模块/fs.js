//首先引入模块
const fs = require('fs'); //引入系统自带的模块(fs文件系统)

function readFile() { //封装一个读取文件的一个函数方法
    return new Promise((reslove, reject) => { //采用promise方法来铺垫
        fs.readFile('./index.js/', (err, data) => { //里面有三个参数第一个文件路径、第二个失败的回调参数、第三个成功就返回参数
            if (err) throw err; //抛出一个错误信息
            // console.log(data.toString());
            let code = data.toString(); //成功的就返回数据
            //用正则匹配所有的console.log
            let output = code
                .replace(/console.log\([a-z0-9'"]+\)/g, '')
                .replace(/const/g, 'var')
            console.log(output)
            //把结果交给一下个promise;
            reslove(output);
        })

    })
}

function writeFile(output) {//新建一个写的方法
    return new Promise((resolve, reject) => {//返回一个异步请求的方法
        fs.writeFile('./output.js', output, (err) => {//通过fs模块来获取使用方法
            if (err) throw err;//如果失败就err
            console.log('写入成功');//否则成功
        })
    })
}
;(async () => {//asyn是异步方法
    let output = await readFile()//通过一个await关键词来
    await writeFile(output)//调用writeFile()这个方法传参数写入数据
})()