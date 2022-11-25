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
          max-height="2000"
          max-width="200"
          :src="imagesource"
          :lazy-src="imagesource"
      > </v-img>

      <v-spacer></v-spacer>
      <v-btn color="teal lighten-1" dark >LOG OUT</v-btn>
    </v-app-bar>
  </div>

</template>
<script>
export default {
  data: () => ({
    imagesource:'https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png',
  }),
}
</script>

