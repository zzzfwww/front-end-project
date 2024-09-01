import { createApp } from 'vue'
// import './style.css'

// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

// 导入路由
import router from './router'
// 创建应用实例
let app = createApp(App)
// 注册插件
app.use(router)
app.use(ElementPlus)
// 挂载容器
app.mount('#app')
