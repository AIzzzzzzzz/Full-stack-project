var express = require('express');
var userRouter = express.Router();
//接口路径必须有users  不然就报错 ，不知道原因
let UserController = require('../../controllers/userControllers')
userRouter.post('/adminapi/users/login',UserController.login);

module.exports = userRouter
