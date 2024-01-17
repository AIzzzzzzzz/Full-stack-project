//请求方法的逻辑    拿到前端发送的数据后做什么
let db = require('../db/sql')
const jwt =require('jsonwebtoken')

const config = require('../config')
let sqllogin = 'SELECT * FROM full_study_schema.full_table where username=? and password =? '
//存储语句
let sqlInster = 'insert into full_study_schema.full_table where'

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
                            token:'Bearer '+ tokenStr
                            
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
        jwt.verify(token,config.jwtSecretKey,(err,result)=>{
            console.log(result['0'].id);
            //拿到token解析到id往数据库里存储数据
        })
        
    }
}

module.exports = UserController