<template>
  <div>
    <v-app-bar
        app
        absolute
        color="white"
        elevation="1"
        height="100"
    >

      <v-img
          max-height="200"
          max-width="200"
          :src="imagesource"
          :lazy-src="imagesource"
      > </v-img>

      <v-spacer></v-spacer>
      <v-btn color="teal lighten-1" dark @click="profileLink" v-if="navigation === 0">HOME PAGE</v-btn>&nbsp;
      <v-btn color="teal lighten-1" dark @click="homePageLink" v-if="navigation === 1">PROFILE</v-btn>&nbsp;
      <v-btn color="teal lighten-1" dark @click="logoutUser" >LOG OUT</v-btn>
    </v-app-bar>
  </div>

</template>
<script>
import router from '@/routes'
import {mapActions} from "vuex";
import {get} from 'vuex-pathify';
export default {
  data: () => ({
    imagesource:  require('@/assets/pokemonimage.png')
  }),
  computed:{
    navigation: get('pagesHistory/current_navigate_profile')
  },
  methods:{
    ...mapActions({
      setNavigationPage:'pagesHistory/setNaviagateProfile',
      logoutUser:'authUser/logoutuUser'
    }),
    profileLink(){
      this.setNavigationPage(1)
      router.push({name:'ProfilePage'})
    },
    homePageLink(){
      this.setNavigationPage(0)
      router.push({name:'HomePage'})
    },
    logoutUser(){
      this.logoutUser()
    }
  }
}
</script>

