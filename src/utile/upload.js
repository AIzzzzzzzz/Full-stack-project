
import axios from 'axios';
function upload(path,ruleForm){
    let params = new FormData()
    for (let i in ruleForm) {
        
        
        params.append(i, ruleForm[i])
    }
    return axios.post(path,params,{
        headers:{
            "Content-Type":"multipart/from-data",
            "Authorization":localStorage.getItem('token')
        }
    })
}

export default upload