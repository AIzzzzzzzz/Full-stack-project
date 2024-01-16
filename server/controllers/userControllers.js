//请求方法的逻辑    拿到前端发送的数据后做什么
let db = require('../db/sql')
let sqllogin = 'SELECT * FROM full_study_schema.full_table where username=? and password =? '
let UserController = {
    login:async (req,res)=>{
            let {username,password} = req.body
            
            db.query(sqllogin,[username,password],(err,result)=>{
                if(result.length!==0){
                    res.send({
                        code:'200',
                        msg:"登录成功"
                    })
                }else{
                    res.send({
                        code:'-1',
                        msg:"请先注册"
                    })
                }
                
              
            })
        
    }
}

module.exports = UserController