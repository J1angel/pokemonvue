const getDefaultState = () => {
    return {
        tab:0,
    }
}
export const pageshistory = {
    namespaced: true,
    state: {
        tab:0,
    },

    getters:{
        current_tab(state){
            return state.tab
        },
    },

    mutations:{
        SET_TAB (state, value) {
            state.tab = value
        },
        resetState(state) {
            Object.assign(state, getDefaultState())
        }
    },

    actions:{
        setTab({commit},key){
            commit("SET_TAB", key)
        },
        resetState({commit}){
            commit('resetState')
        }
    }



}

export default pageshistory
