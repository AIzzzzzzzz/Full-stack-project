//请求方法的逻辑    拿到前端发送的数据后做什么
let db = require('../db/sql')
let UserController = {
    login:async (req,res)=>{
            res.send(req.body);
            db.query('SELECT * FROM full_study_schema.full_table;',(err,result)=>{
              console.log(result);
              
            })
        
    }
}

module.exports = UserController