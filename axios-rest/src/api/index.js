import axios  from "../utils/request";
import path from "./path"

const api = {
    // 成品详情地址
    getChengpin(){
        return axios.get(path.baseUrl+path.chengpin);
    },
    // 
    postLogin(){
        return axios.post(path.baseUrl+path.loginPath,{
            user_id:"iwen@qq.com",
            password:"iwen123",
            verification_code: "crfvw"
        })
    }
    
}

export default api;