import PokemonApi from '@/apilinks/pokemonapi';

const getDefaultState = () => {
    return {
        pokemons:[],
        current_url:'https://pokeapi.co/api/v2/pokemon/',
        prev_url:'',
        next_url:''
    }
}
export const manufacture = {
    namespaced: true,
    state: {
        pokemons:[],
        current_url:'https://pokeapi.co/api/v2/pokemon/',
        next_url:''
    },

    getters:{
        pokemons(state){
            return state.pokemons
        },
        current_url(state){
            return state.current_url
        },
        next_url(state){
            return state.next_url
        }
    },

    mutations:{
        SET_POKEMONS (state, value) {
            state.pokemons.push(value)
        },
        SET_POKEMONS_NEW (state, value) {
            state.pokemons = value
        },
        SET_CURRENT_URL(state, value){
            state.current_url = value
        },
        SET_NEXT_URL(state, value){
            state.next_url = value
        },
        resetState(state) {
            Object.assign(state, getDefaultState())
        }
    },

    actions:{
        setPokemons({state,commit}){
            if (state.next_url !== null){
                PokemonApi.getPokemons(state.next_url).then(response => {
                    response.data.results.forEach(pokemon => {
                        pokemon.id = pokemon.url.split('/')
                            .filter(function(part) { return !!part }).pop();
                        commit('SET_POKEMONS',pokemon)
                    });
                    commit('SET_NEXT_URL', response.data.next)
                }).catch(error => {
                    console.log(error)
                })
            }
        },
       setPokemonsNew({state,commit}){
           PokemonApi.getPokemons(state.current_url).then(response => {
               let new_pokemons = []
               console.log(response.data.next)
               response.data.results.forEach(pokemon => {
                   pokemon.id = pokemon.url.split('/')
                       .filter(function(part) { return !!part }).pop();
                   new_pokemons.push(pokemon)
               });
               commit('SET_POKEMONS_NEW', new_pokemons)
               commit('SET_NEXT_URL', response.data.next)

           }).catch(error => {
               console.log(error)
           })
       },
        resetState({commit}){
            commit('resetState')
        }
    }

}

export default manufacture
