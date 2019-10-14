const {//引入方法
    find,
    update,
    remove
} = require('./db');
(async () => { //立即执行函数async是异步关键词
    const result = await find('students');
    await update('students',{ name: '馨馨'}, {name: '我最爱的馨馨'})
    // await remove('students',{ name: 'hui'})
    console.log(result);
})();