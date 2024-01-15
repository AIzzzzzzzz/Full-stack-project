
let mysql = require('mysql2')


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:`full_study_schema`
  })
  
//   db.query('select 01',(err,result)=>{
//     console.log(result);
//   })

//接口名字不能为  host   user   password  database

//     host:'localhost',
//     user:'root',
//     password:'123456',
//     database:`full_study_schema`




  module.exports = db