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
    },
    chatBot(msg){
        return axios.post(path.chatUrl,{
            message:msg
        })
    }
    
}

export default api;