import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // 默认重定向到关于我们
    redirect:'/about/us',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children:[
      {
        // 二级导航的路径不需要加斜杠
        path:"us",
        component:()=>import('../views/AboutSub/AboutUS.vue')
      },
      {
        path:"info",
        component:()=>import('../views/AboutSub/AboutInfo.vue')
      }
    ] 
  },
  {
    path:"/news", 
    name: 'news',
    // 这是异步加载方式
    component:()=>import('../views/NewsView.vue')
  },
  {
    path:"/newsDetails/:name",
    name:"newsdetails",
    component:()=>import('../views/NewsDetailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
