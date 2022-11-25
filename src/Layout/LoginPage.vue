<template>
    <div>
      <v-main>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="100%">
        <!-- Provides the application the proper gutter -->
        <v-container fluid style="height: 920px" class="mb-12 d-flex flex-column justify-center align-center">
          <v-main>
            <v-container fluid fill-height>
              <v-layout align-center justify-center>
                <v-card class="elevation-12" width="500px">
                  <v-img
                      height="150px"
                      :src="imagesource"
                      :lazy-src="imagesource"
                  > </v-img>
                  <v-card-text>
                    <LoginForm></LoginForm>
                    <v-card-text class="default-text-size text-center">
                      Not a member? <span @click="resgisterUserLink" class="text-color-link">Register now</span>
                    </v-card-text>
                  </v-card-text>
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
import router from "@/routes";
import LoginForm from "@/components/LoginForm";

export default {
  name: 'LoginPage',
  components:{
    LoginForm,
  },

  data: () => ({
    textboxdesign:{
      username:{
        icon:'mdi-account',
        label:'Username',
        type:'text'
      },
      password:{
        icon:'mdi-lock',
        label:'Password',
        type:'text'
      }
    },
    credentials:{
      username:'',
      password:''
    },
    imagesource: 'https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png',
  }),
  methods:{
    resgisterUserLink(){
      router.push({name:'RegisterPage'})
    }
  }

};
</script>
