const getDefaultState = () => {
    return {
        tab:0,
    }
}
export const pageshistory = {
    namespaced: true,
    state: {
        tab:0,
        navigate_profile:0,
    },

    getters:{
        current_tab(state){
            return state.tab
        },
        current_navigate_profile(state){
            return state.navigate_profile
        },
    },

    mutations:{
        SET_TAB (state, value) {
            state.tab = value
        },
        SET_NAVIGATE_PROFILE (state, value) {
            state.navigate_profile = value
        },
        resetState(state) {
            Object.assign(state, getDefaultState())
        }
    },

    actions:{
        setTab({commit},key){
            commit("SET_TAB", key)
        },
        setNaviagateProfile({commit},key){
            commit("SET_NAVIGATE_PROFILE", key)
        },
        resetState({commit}){
            commit('resetState')
        }
    }



}

export default pageshistory
