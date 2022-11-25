import UserReactionsApi from '@/apilinks/userreactionsapi'

const getDefaultState = () => {
    return {
        user_reactions:[],
        page:1,
        last_page:0,
        current_url:'',
        prev_url:''
    }
}
export const userreactions = {
    namespaced: true,
    state: {
        user_reactions:[],
        page:1,
        last_page:0,
        current_url:'',
        prev_url:''
    },

    getters:{
        current_user_reactions(state){
            return state.user_reactions
        },
        page(state){
            return state.page
        },
        last_page(state){
            return state.last_page
        },
        current_url(state){
            return state.current_url
        },
        prev_url(state){
            return state.prev_url
        }
    },

    mutations:{
        SET_USER_REACTIONS(state, value) {
            state.user_reactions.push(...value)
        },
        SET_USER_REACTIONS_NEW(state, value){
            state.user_reactions = value
        },
        SET_PAGE(state, value){
            state.page = value
        },
        SET_LASTPAGE(state, value){
            state.last_page = value
        },
        SET_CURRENTURL(state, value){
            state.current_url = value
        },
        SET_PREVURL(state, value){
            state.prev_url = value
        },
        resetState(state) {
            Object.assign(state, getDefaultState())
        }
    },

    actions:{
        setUserReactions({commit,state}){
            UserReactionsApi.getUserReactions(state.page).then(response => {
                if (response.data.data.length !== 0 && state.user_reactions.length !== 0){
                    commit("SET_USER_REACTIONS", response.data.data)
                }else{
                    commit("SET_USER_REACTIONS_NEW", response.data.data)
                }

            }).catch(error => {
                console.log(error)
            })

        },
        setUserReactionsNew({commit,state}){
            UserReactionsApi.getUserReactions(state.page).then(response => {
                commit("SET_USER_REACTIONS_NEW", response.data.data)

            }).catch(error => {
                console.log(error)
            })

        },
        changepage({commit}){
            let a = this.state.userReactions.page + 1
            commit('SET_PAGE', a)
        },
        resetState({commit}){
            commit('resetState')
        }
    }

}

export default userreactions
