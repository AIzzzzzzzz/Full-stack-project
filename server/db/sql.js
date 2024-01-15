
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

  module.exports = db