import VueRouter from 'vue-router';
import LoginPage from '@/Layout/LoginPage'
import Vue from "vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: LoginPage,
        name: 'LoginPage',
    },
    /*{
        path: '/homepage',
        component: HomePage,
        name: 'homepage',
        beforeEnter: (to, from, next) => {
            if (store.state.authuser.isAuthenticated && store.state.authuser.bearer){
                next()
            }else{
                router.push('/')
            }
        }
    },*/
]
const router = new VueRouter({
    mode: 'history',
    routes: routes
})



export default router
