//请求方法的逻辑    拿到前端发送的数据后做什么
let db = require('../db/sql')
const jwt =require('jsonwebtoken')

const config = require('../config')
let sqllogin = 'SELECT * FROM full_study_schema.full_table where username=? and password =? '
//存储语句
let sqlInster = 'insert into full_study_schema.full_table (introduction,avatar) value(?,?)  '
let updataMQL = 'update full_study_schema.full_table set introduction=?,avatar=? where id=?'

let UserController = {
    login:async (req,res)=>{
            let {username,password} = req.body
            
            db.query(sqllogin,[username,password],(err,result)=>{
                if(result.length!==0){

                    const user = {...result,password:'',}
                    const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn:'200h'})


                    res.send({
                        code:200,
                        msg:'登录成功',
                        data:{
                            id:result[0].id,
                            username:result[0].username,
                            gender:result[0].gender,
                            introduction:result[0].introduction,
                            role:result[0].role,
                            token:'Bearer '+ tokenStr,
                            avatar:result[0].avatar
                            
                        }
                    })
                }else{
                    res.send({
                        code:'-1',
                        msg:"请先注册"
                    })
                }
                
              
            })
        
    },
    upload:async(req,res)=>{
        console.log(req.body,req.file);
        const token = req.headers['authorization'].split(/\s+/g)[1]
        const avatar = `/avataruploads/${req.file.filename}`
        let ID = 0
        jwt.verify(token,config.jwtSecretKey,(err,result)=>{
            console.log(result['0'].id);
            console.log(avatar);
            console.log(req.body.introduction);
            //拿到token解析到id往数据库里存储数据
            ID = result['0'].id
        })
        db.query(updataMQL,[req.body.introduction,avatar,ID],(err,dbresult)=>{
            if(err){
                res.send({
                    code:404,
                    msg:'err.message'
                })
                console.log(err.message);
            }
            else{
                
                res.send({
                    code:200,
                    msg:'更新成功',
                    data:{
                        introduction:req.body.introduction,
                        avatar,
                    },
                })
            }
        })
        
    }
}

module.exports = UserController