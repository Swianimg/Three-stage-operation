//新建一个da.js文件 然后 npm init 初始化 
//然后安装npm insatall Mongodb;
//然后连接数据库做增删查改操作
const MongoClient = require('mongodb').MongoClient; //引入mongodb模块
//踊跃测试
const assert = require('assert'); //引入assert模块

//Connection URL
const url = 'mongodb://localhost:27017'; //连接数据库地址

const dbName = '1908'; //Database Name(数据库的名称)

const connect = () => { //封装一个方法来连接服务器
    return new Promise((resolve, reject) => {
        //Use connect method to connect to the server
        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function (err, client) { //使用connect方法连接到服务器
            //useNewUrlParser: true, useUnifiedTopology: true 打这两个上去的意义就是防止系统出现报错
            assert.equal(null, err);
            err ? reject(err) : resolve(client);
            console.log("Connected successfully to server"); //成功连接到服务器
        })
    })
}
//查表
const find = (col, query) => {
    return new Promise(async (resolve, reject) => { //因为promise是异步方法所以采用async
        const client = await connect();
        //连接服务器
        const db = client.db(dbName);
        //选中需要连接的库
        const collection = db.collection(col); //查表
        //Find some documents(找到一些文档)
        collection.find(query ? query : {}).toArray(function (err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);
            err ? reject(err) : resolve(docs); //判断是否有值
        });
        //关闭连接
        client.close();
    })
}
//增加数据
// query: 筛选条件
// query: 更改后的值
const update = ((col, query, query2) => {
    return new Promise(async (resolve, reject) => {
        const client = await connect();//调用连接数据库方法
        const db = client.db(dbName);//选库
        const collection = db.collection(col);//选表
        collection.updateMany({
            ...query
        }, {
            $set: {
                ...query2
            }
        }, function (err, result) {
            err ? reject(err) : resolve(result)
        })
    })
})

//删除数据
const remove = (col, query) => {
    return new Promise(async(resolve, reject) => {
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.deleteMany(query, function (err, result) {
            err ? reject(err) : resolve(result)
        })
    })
}

//插入数据
const insert = (col, query) => {
    return new Promise(async (resolve, reject) => {
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(query, function (err, result) {
            err ? reject(err) : resolve(result)
        });
    })
}

module.exports = {//释放出去
    connect,
    find,
    update,
    remove,
    insert
}