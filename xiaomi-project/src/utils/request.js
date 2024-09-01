import axios from "axios";

// 初始化一个axios实例
var instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 20000,
});

// 设置tokend的方法
export const setToken = (token) => {
    // 将token存放在axios实例的defaults.headers.common中
    // 因为服务器是根据这个字段来判断用户是否登录的
    instance.defaults.headers.common["token"] = token;
}

// 导出axios实例
export default instance;