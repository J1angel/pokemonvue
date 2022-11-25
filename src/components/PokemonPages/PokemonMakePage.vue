<template>
  <div>
    <v-tabs
        v-model="current_tab"
        background-color="blue-grey lighten-4"
        right

    >
      <v-tabs-slider color="teal lighten-1"></v-tabs-slider>

      <v-tab

          v-for="(item,k) in items"
          :key="k"
          @click="handleTab(k)"
          active-class="active"
          class="default-text-size"
      >
        {{ item }}
      </v-tab>
    </v-tabs>


    <v-tabs-items v-model="current_tab">
      <v-tab-item>
        <v-card flat>
          <PokemonPage ref="stud"></PokemonPage>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <PokemonUsersPage ref="stud1"></PokemonUsersPage>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

  </div>
</template>
<script>

import store from "@/store";
import {mapActions} from "vuex";
import PokemonPage from "@/components/PokemonPages/PokemonPage";
import PokemonUsersPage from "@/components/PokemonPages/PokemonUsersPage"

export default {
  name:'PokemonMakePage',
  props:[
    'items'
  ],
  components:{
    PokemonPage,
    PokemonUsersPage,
  },
  data(){
    return {
      key0:0,
      key1:0,
    }
  },
  computed:{
    current_tab:{
      get: () => store.getters["pagesHistory/current_tab"],
      set: (value) => store.commit("pagesHistory/SET_TAB", value )
    },
  },

  methods:{
    ...mapActions({
      setTab:'pagesHistory/setTab'
    }),
    handleTab(key) {
      this.setTab(key)
      if (key === 0){
        this.key0++
        if (this.key0 > 1){
          this.$refs.stud.setPokemonsNew();
        }
      }else if(key === 1){
        this.key1++
        if (this.key1 > 1){
          this.$refs.stud1.getUserReactionsNew();
        }
      }
    },
  }
}
</script>

