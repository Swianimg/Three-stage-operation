// sync 同步 async 异步
function a() {
    return new Promise((resolve, reject) => { //resolve成功的回调 reject失败的回调
        setTimeout(() => {
            console.log('我是a');
            resolve();

        }, 30)


    })
}
// a();
function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resolve) {
                console.log('我是b');
            }
            resolve();

        }, 10)
    })

}
// b();
function c() {//封装一个c的方法
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('我是C');
            resolve();

        },5)
    })
}
// c();

//如果不采用调用的方法那就是按照那个时间短就哪个先被执行，如果采用异步请求可以控制它们的先后顺序
//如果外部有其他需要打印的程序，那么它们都是先执行外部，等到外部执行完了在执行自己内部的程序
console.log(1);

(async ()=>{//调用立刻执行函数并且异步请求
    await b(); //await(关键词等待执行完的意思)
    await a();
    await c();
})();
console.log(8);
console.log(9);


// (async ()=>{//调用立刻执行函数并且异步请求
//     await a();
//     await b();
//     await c();
// })();

