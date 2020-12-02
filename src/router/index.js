import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'',
            redirect:'/home'
        },
        {
            path:'/home',
            component:()=>import('views/home')
        },
        {
            path:'/category',
            component:()=>import('views/category')
        },
        {
            path:'/car',
            component:()=>import('views/car')
        },
        {
            path:'/profile',
            component:()=>import('views/profile')
        }
    ],
    mode:'history'
})

export default router