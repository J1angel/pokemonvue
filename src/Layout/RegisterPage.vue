<template>
  <div>
    <v-main>
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="100%">
      <!-- Provides the application the proper gutter -->
      <v-container fluid style="height: 921px" class="mb-12 d-flex flex-column justify-center align-center ">
        <v-main>

          <v-container fluid fill-height>

            <v-layout align-center justify-center>
              <v-card class="elevation-12" width="800px">
                <v-img
                    height="150px"
                    :src="imagesource"
                    :lazy-src="imagesource"
                > </v-img>
                <RegisterForm></RegisterForm>
              </v-card>
            </v-layout>

          </v-container>

        </v-main>
      </v-container>
      </v-parallax>
    </v-main>
  </div>

</template>

<script>
import RegisterForm from "@/components/RegisterForm";
export default {
  name: 'RegisterPage',
  components:{
    RegisterForm
  },
  data: () => ({
    imagesource:'https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png',
  }),

};
</script>
<style scoped>
::v-deep ::-webkit-scrollbar {
  width: 0;
  background: transparent
}

</style>
