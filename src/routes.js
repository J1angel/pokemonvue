import VueRouter from 'vue-router';
import LoginPage from '@/Layout/LoginPage'
import RegisterPage from '@/Layout/RegisterPage'
import HomePage from '@/Layout/HomePage'
import Vue from "vue"
import store from "@/store";
import ProfilePage from '@/Layout/ProfilePage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: LoginPage,
        name: 'LoginPage',
    },
    {
        path: '/register',
        component: RegisterPage,
        name: 'RegisterPage',
    },
    {
        path: '/homepage',
        component: HomePage,
        name: 'HomePage',
        beforeEnter: (to, from, next) => {
            if (store.state.authUser.is_authenticated && store.state.authUser.is_authenticated){
                next()
            }else{
                router.push('/')
            }
        }
    },
    {
        path: '/profilepage',
        component: ProfilePage,
        name: 'ProfilePage',
        beforeEnter: (to, from, next) => {
            if (store.state.authUser.is_authenticated && store.state.authUser.is_authenticated){
                next()
            }else{
                router.push('/')
            }
        }
    },
]
const router = new VueRouter({
    mode: 'history',
    routes: routes
})



export default router
