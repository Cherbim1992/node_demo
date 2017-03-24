/**
 * Created by Administrator on 2017/3/16.
 */
var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
app.get('/', function(req, res){
    request('http:', function (error, response, body)  {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body);//当前的$,它是拿到了整个body的前端选择器
            console.log($('.link_title').text()); //我博客的获取用户名
            console.log($('.article_description').text());
        }else{
            console.log("nono");
        }
    })
});
app.listen(3000);
    