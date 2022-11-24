<template>
  <v-app id="inspire">
    <div>
      <NavBar></NavBar>
      <v-main>

        <!-- Provides the application the proper gutter -->
        <v-container fluid style="height: 600px" class="mb-12 d-flex flex-column justify-center align-center">
          <v-main>
            <v-container fluid fill-height>
              <v-layout align-center justify-center>
                <v-card class="elevation-12" width="500px">
                  <v-card-title class="justify-center">Login
                  </v-card-title>
                  <v-card-text>
                    <v-form>
                      <TextBox
                          v-for="(item,i) in textboxdesign" :key="i"
                          :items="item"
                          v-model="credentials[i]"
                      >

                      </TextBox>
                    </v-form>
<!--                    <p style="color: darkred">{{message}}</p>-->
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="teal lighten-1" dark>Login</v-btn>
                  </v-card-actions>
                </v-card>
              </v-layout>
            </v-container>
          </v-main>

        </v-container>
      </v-main>
    </div>

  </v-app>
</template>

<script>
export default {
  name: 'LoginPage',

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
    }

  }),

};
</script>
