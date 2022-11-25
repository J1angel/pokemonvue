import router from '@/routes';
import LoginApi from '@/apilinks/loginapi'
import store from "@/store";

const getDefaultState = () => {
    return {
        is_authenticated: false,
        userinfo:{},
        token:'',
        status_message:''
    }
}

export const authuser = {
    namespaced: true,
    state: {  is_authenticated: false,
        userinfo:{},
        token:'',
        status_message:''
    },

    getters:{
        is_authenticated(state) {
            return state.is_authenticated
        },
        current_user(state){
            return state.userinfo
        },
        current_token(state){
            return state.bearer
        },
        current_status_message(state){
            return state.status_message
        }
    },

    mutations:{
        is_authenticated(state,value) {
            state.is_authenticated = value
        },
        user(state,value){
            state.userinfo = value
        },
        token(state,value){
            state.token = value
        },
        status_message(state,value) {
            state.status_message = value
        },
        resetState(state) {
            Object.assign(state, getDefaultState())
        }
    },

    actions:{
        login({commit},credentials){
            if (store.getters["authuser/is_authenticated"]){
                router.push({name:'HomePage'})
            }else {
                LoginApi.loginUser(credentials).then(response => {
                    commit('token', response.data.token)
                    LoginApi.user().then(response => {
                        commit('user', response.data)
                        commit('is_authenticated', true)
                        router.push({name:'HomePage'})
                    }).catch(error => {
                        commit('status_message',error.response.data.error)
                    })
                }).catch(error => {
                    commit('status_message',error.response.data.error)
                })
            }
        },
        loginRegisterUser({commit},data){
            commit('is_authenticated', data.status)
            commit('token', data.token)
            router.push({name:'HomePage'})
        },
        logoutuUser({commit}){
            commit('resetState')
            router.push('/')
        }
    }
}

export default authuser
