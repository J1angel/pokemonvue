import ApiPokemon from '@/axiospokemon';
import Api from '@/axios';
import store from '@/store';
export default {
    getPokemons(url){
        return ApiPokemon().get(url)
    },
    searchPokemon(data){
        return ApiPokemon().get(`https://pokeapi.co/api/v2/pokemon/${data}`)
    },
    pokemonLike(data){
        Api().defaults.headers.common["Authorization"] = `Bearer ${store.state.authUser.token}`;
        return Api().post('/auth/pokemonlike',data)
    },
    pokemonHate(data){
        Api().defaults.headers.common["Authorization"] = `Bearer ${store.state.authUser.token}`;
        return Api().post('/auth/pokemonhate',data)
    }
}
