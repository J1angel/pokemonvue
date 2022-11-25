import ApiPokemon from '@/axiospokemon'
export default {
    getPokemons(url){
        return ApiPokemon().get(url)
    },
    searchPokemon(data){
        return ApiPokemon().get(`https://pokeapi.co/api/v2/pokemon/${data}`)
    }
}
