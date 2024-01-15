var express = require('express');
var userRouter = express.Router();
//接口路径不能为  host   user   password  database  不然就报错
let UserController = require('../../controllers/userControllers')
userRouter.post('/adminapi/users/login',UserController.login);

module.exports = userRouter
