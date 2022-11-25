<template>
  <v-dialog
      v-model="dialog"
      max-width="374"
      class="mx-auto my-12"
  >
      <v-card v-if="search_value?.length === 0">
        NOT FOUND
      </v-card>
      <v-card
          v-else
      >
        <template slot="progress">
          <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
          ></v-progress-linear>
        </template>
        <v-list-item class="justify-center">
          <v-list-item-avatar size="250">
            <v-img v-bind:src="search_value.sprites.front_default" referrerpolicy=“no-referrer” ></v-img>
          </v-list-item-avatar>

        </v-list-item>

        <v-card-title style="font-size: xx-large">{{ search_value.name }}</v-card-title>

        <v-card-text style="font-size: large">

          <div>Base Experience: {{search_value.base_experience}}</div>
          <div>Height: {{search_value.height}}</div>
          <div>Weight: {{search_value.weight}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-card-text style="font-size: large">
          Pokemon Types<br>
          <v-chip-group
              active-class="primary--text"
              column
          >
            <v-chip
                v-for="(type, j) in search_value.types"
                :key="j"
            >
              {{ type.type.name }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
        <v-card-text style="font-size: large">
          Abilities<br>
          <v-chip-group
              active-class="primary--text"
              column
          >
            <v-chip
                v-for="(ability, i) in search_value.abilities"
                :key="i"
            >
              {{ ability.ability.name }}
            </v-chip>
          </v-chip-group>
          <v-card-actions class="float-right">

            <v-btn rounded color="red darken-3"><v-icon color="white" @click="pokemonLike(search_value)">mdi-thumb-up</v-icon></v-btn>
            <v-btn rounded  color="blue-grey darken-1"><v-icon color="white"  @click="pokemonHate(search_value)">mdi-thumb-down</v-icon></v-btn>
          </v-card-actions>
          <br><br>
        </v-card-text>

      </v-card>
  </v-dialog>
</template>
<script>
import {get} from 'vuex-pathify';
import PokemonApi from '@/apilinks/pokemonapi'
export default {
  data(){
    return {
      dialog:false,
      reaction:{
        pokemon_name:'',
        image_link:''
      }
    }
  },
  computed:{
    search_value:get('searchPokemon/search_value')
  },
  mounted() {
    this.$root.$on('showDialog', () => {
      this.showDialog()
    })
  },
  methods:{
     showDialog(){
       this.dialog = true
     },
     pokemonLike(item){
       let {name, sprites} = item
       let {front_default} = sprites
       this.reaction.pokemon_name = name
       this.reaction.image_link = front_default
       PokemonApi.pokemonLike(this.reaction).then(response => {
         console.log(response)
       }).catch(error => {
         console.log(error)
       })
     },
    pokemonHate(item){
      let {name, sprites} = item
      let {front_default} = sprites
      this.reaction.pokemon_name = name
      this.reaction.image_link = front_default
      PokemonApi.pokemonHate(this.reaction).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }

  }
}
</script>
