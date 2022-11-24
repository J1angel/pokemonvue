<template>
  <div><v-card-text>
    <v-form>
        <v-text-field
              outlined
              prepend-inner-icon="mdi-account"
              v-model="user_credentials.username"
              label="Username"
              type="text"
          ></v-text-field>
          <v-text-field
              outlined
              prepend-inner-icon="mdi-lock"
              v-model="user_credentials.password"
              label="Password"
              type="password"
          ></v-text-field>
    </v-form>
    <div class="text-center">
      <p style="color: darkred">{{error_message}}</p>
    </div>

    <v-card-actions>
      <v-btn color="teal lighten-1" block @click="loginUser" :disabled="button_allowed" class="white--text">Login</v-btn>
    </v-card-actions>
  </v-card-text>

  </div>

</template>
<script>
import {mapActions} from "vuex";
import {get} from 'vuex-pathify';

export default {
  data: () => ({
    now_date:new Date().toISOString().slice(0,10),
    user_credentials:{
      username:'',
      password:'',
    },
    error_message:'',
    button_allowed:true

  }),
  watch:{
    'user_credentials':{
      deep: true,
      handler(newVal){
        this.button_allowed = !(newVal.username !== '' && newVal.password !== '')
      }
    },
  },
  computed:{
    is_authenticated:get('authuser/is_authenticated'),
  },
  methods:{
    ...mapActions({
      login:'authUser/login'
    }),
    loginUser(){
      this.login(this.user_credentials)
    }
  }
}
</script>
