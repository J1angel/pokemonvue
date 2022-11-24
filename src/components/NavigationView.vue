<template>
  <div>
    <v-app-bar
        app
        absolute
        color="white"
        elevation="1"
        height="100"
    >

      <v-icon size="95px" color="teal lighten-1">mdi-pokemon-go</v-icon>
      <v-toolbar-title v-if="!$vuetify.breakpoint.mobile" class="title-design-2">Car Maker</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn color="teal lighten-1" dark >LOG OUT</v-btn>
    </v-app-bar>
  </div>

</template>

