//promise方法是一种异步请求的方法，一般用在与回调函数多的时候才用的着
//毕竟定时器也是异步
function a(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log('我是a');
            reslove();//成功的回调
            
        },20)
    })
}
// a()

function b(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log('我是b');
            reslove();//成功的回调
            
        },400)
    })
}
// b()
function c(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log('我是c');
            reslove();//成功的回调
            
        },300)
    })
}
// c()

a().then(b).then(c);//promise用法可以控制先后顺序