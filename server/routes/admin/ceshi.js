var express = require('express');
var ceshiRouter = express.Router();

//接口路径必须有users  不然就报错 ，不知道原因
ceshiRouter.post('/adminapi/user/user',async(req,res)=>{
    
    console.log(456);
    res.send('123')
});

module.exports = ceshiRouter
