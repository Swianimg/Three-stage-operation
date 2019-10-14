var request = require('request');
const {//引入插入方法
    insert
} = require('./db');
request('https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1557D0AA38ECE0&cp=5DA39EEC3EE0AE1&max_behot_time=1570971439&_signature=NGLnKgAAacfcuMVXS3RPoDRi5z&i=1570971439',function(error,response,body){
    // console.log('error',error);
    // console.log('statusCode:',response && response.statusCode);
    // console.log(JSON.parse(body));
    const news = JSON.parse(body).data;
    news.forEach(element => {
        console.log(element.abstract);
        console.log(element.title);
        console.log(element.image_list);
        insert('news',[{
            title:element.title,
            abstract:element.abstract,
            image_list:element.image_list
        }])
    });
    
});