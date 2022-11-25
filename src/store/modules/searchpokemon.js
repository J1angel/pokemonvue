import PokemonApi from '@/apilinks/pokemonapi';


const getDefaultState = () => {
    return {
        search:'',
        search_value:[],
    }
}
export const searchpokemon = {
    namespaced: true,
    state: {
        search:'',
        search_value:[],
    },

    getters:{
        search(state){
            return state.search
        },
        search_value(state){
            return state.search_value
        },
    },

    mutations:{
        SET_SEARCH(state,value){
          state.search = value
        },
        SET_SEARCH_VALUE (state, value) {
            state.search_value = value
        },
        resetState(state) {
            Object.assign(state, getDefaultState())
        }
    },

    actions:{
        setSearchValue({commit,state}){
            PokemonApi.searchPokemon(state.search).then(response => {
               commit('SET_SEARCH_VALUE',response.data)
                // eslint-disable-next-line no-unused-vars
            }).catch(error => {
                commit('SET_SEARCH_VALUE',[])
            })
        },
        resetState({commit}){
            commit('resetState')
        }
    }

}

export default searchpokemon
