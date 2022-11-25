<template>
  <div>
    <v-card
        elevation="16"
        class="mx-auto"

    >
      <v-card-text  class="d-flex justify-center align-center" >
        <v-card-text >
          <v-row>
            <v-text-field label="Search" v-model="search"  prepend-inner-icon="mdi-magnify-expand" outlined >
            </v-text-field>&nbsp;
            <v-btn dark x-large color="pink" @click="searchPokemon"> SEARCH </v-btn>
          </v-row>
          <PokemonList :items="pokemons"></PokemonList>
        </v-card-text>
      </v-card-text>
      <div v-observe-visibility="handleScrolledToBottom"></div>
    </v-card>
    <PokemonDetail></PokemonDetail>
  </div>

</template>
<script>
import {mapActions} from "vuex";
import {get} from "vuex-pathify";
import PokemonList from "@/components/PokemonList";
import PokemonDetail from "@/components/PokemonDetail";
import store from "@/store";
export default {
  name: 'HelloWorld',
  components:{
    PokemonList,
    PokemonDetail
  },
  data() {
    return {
      benched: 0,
      toggle_exclusive: null,
    }
  },
  created() {
    this.setPokemonsNew()
  },
  computed: {
    pokemons: get('pokemon/pokemons'),
    next_url: get('pokemon/next_url'),
    search: {
      get: () => store.getters['searchPokemon/search'],
      set: (value) => store.commit('searchPokemon/SET_SEARCH', value)
    },
  },
  methods: {
    ...mapActions({
      setPokemonsNew: 'pokemon/setPokemonsNew',
      setPokemons: 'pokemon/setPokemons',
      setSearchValue:'searchPokemon/setSearchValue'
    }),
    handleScrolledToBottom(isVisible) {
      if (isVisible) {
        if (this.next_url !== null){
          this.setPokemons()
        }
      }
    },
    searchPokemon() {
      if(this.search !== ''){
        this.setSearchValue()
        this.$root.$emit('showDialog')
      }
    }
  }
}

</script>
