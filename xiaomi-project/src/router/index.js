import {createRouter,createWebHistory} from "vue-router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs"

// 路由数组
const routes = [
    {
        path: '/',
        name:"home",
        meta: {
            title: '首页'
        },
        component: () => import('../views/Home.vue')
    },
    {
        path: '/goods',
        name:"goods",
        meta: {
            title: '商品'
        },
        component: () => import('../views/Goods.vue')
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/index',
        redirect: '/'
    },
    {
        path: '/detail',
        name:"detail",
        meta: {
            title: '商品详情'
        },
        component: () => import('../views/Detail.vue')  // 注意文件名应为 Detail.vue
    },
    {
        path: '/order',
        name:"order",
        meta: {
            title: '订单'
        },
        component: () => import('../views/Order.vue')
    },
    {
        path: '/shoppingCart',
        name:"shoppingCart",
        meta: {
            title: '购物车'
        },
        component: () => import('../views/ShoppingCart.vue')
    },
    {
        path: '/collect',
        name:"collect",
        meta: {
            title: '收藏'
        },
        component: () => import('../views/Collect.vue')
    },
    {
        path: '/about',
        name:"about",
        meta: {
            title: '关于我们'
        },
        component: () => import('../views/About.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name:"error",
        meta: {
            title: '404'
        },
        component: () => import('../views/Error.vue')
    }
];

// 创建路由对象
const router = createRouter({
    routes,
    history:createWebHistory()
})
// 挂载路由导航守卫
router.beforeEach((to,from,next)=>{
    // 开启进度条
    NProgress.start()
    next()
})
// 挂载路由导航守卫
router.afterEach((to,from)=>{
    // 关闭进度条
    NProgress.done()
    document.title = to.meta.title
})
// 导出路由对象
export default router