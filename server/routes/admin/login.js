var express = require('express');
var userRouter = express.Router();
const multipart  = require('multer')
const upload = multipart({ dest: 'public/avataruploads/' })
//接口路径必须有users  不然就报错 ，不知道原因
let UserController = require('../../controllers/userControllers')
userRouter.post('/adminapi/users/login',UserController.login);
//用户上传接口
userRouter.post('/adminapi/users/upload',upload.single('file'),UserController.upload)
userRouter.post('/adminapi/users/adduser',upload.single('file'),UserController.adduser)
module.exports = userRouter
