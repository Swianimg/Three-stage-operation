var express = require('express');//引入express模块
var router = express.Router();
const {//引入方法
    find,
} = require('../mongo/db');//方法路径
/* GET users listing. */
router.get('/', async function (req, res, next) {//get请求获取数据
    let news = await find('news')//查表
    res.json({//结果集为json
        news
    });
});

module.exports = router;