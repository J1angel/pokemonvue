<template>
  <div>
  <NavBar></NavBar>

  <v-main>
    <PokemonMakerPage :items="items"></PokemonMakerPage>
  </v-main>
  </div>
</template>
<script>
import PokemonMakerPage from "@/components/PokemonPages/PokemonMakePage";

export default{
  name: 'HomePage',
  components:{
    PokemonMakerPage,
  },
  data () {
    return {
      items: [
        'Pokemons', 'Pokemon Users'
      ],
    }
  },
}
</script>
