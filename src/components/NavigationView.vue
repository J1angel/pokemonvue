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
      <v-btn color="teal lighten-1" dark @click="profileLink">PROFILE</v-btn>&nbsp;
      <v-btn color="teal lighten-1" dark >LOG OUT</v-btn>
    </v-app-bar>
  </div>

</template>
<script>
import router from '@/routes'
export default {
  data: () => ({
    imagesource:  require('@/assets/pokemonimage.png')
  }),
  methods:{
    profileLink(){
      router.push({name:'ProfilePage'})
    }
  }
}
</script>

