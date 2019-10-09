//开启一个异步请求
function a() {
    console.log('我不等你了，蛋糕做好后你就打电话给我，我把电话号码放着');
}
a(); //立刻执行

function b(callback) {
    setTimeout(() => {
        console.log('知道，知道');
        callback();
        setTimeout(()=>{
            console.log('你的牛奶快到了');
        },200)
    }, 500)
}
b();//立刻执行
// 回调让异步变得有意义
// 如果异步没回调，那有可能失去异步的结果
// 如果见到有回调函数，那一般这个函数是异步