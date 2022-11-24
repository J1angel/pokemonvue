<template>
  <div><v-card-text>
    <v-form>
      <v-row>
        <v-col cols="12">
          <v-text-field
              outlined
              prepend-inner-icon="mdi-account"
              v-model="user_credentials.username"
              label="Username"
              type="text"
              :rules="text_required"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
              outlined
              v-model="user_credentials.first_name"
              label="First Name"
              type="text"
              :rules="text_required"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
              outlined
              v-model="user_credentials.last_name"
              label="Last Name"
              type="text"
              :rules="text_required"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
              outlined
              v-model="user_credentials.birthday"
              label="Birthdate"
              type="date"
              :max="now_date"
              :rules="select_required"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
              outlined
              v-model="user_credentials.password"
              label="Password"
              type="password"
              :rules="password_contains"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
              outlined
              v-model="user_credentials.confirm_password"
              label="Confirm Password"
              type="password"
              :rules="text_required.concat(passwordConfirmationRule)"
          ></v-text-field>
        </v-col>
      </v-row>

    </v-form>
    <div class="text-center">
      <p style="color: darkred">{{error_message}}</p>
    </div>

    <v-card-actions>
      <v-btn color="teal lighten-1" block @click="regusterUser" :disabled="button_allowed" class="white--text">Register</v-btn>
    </v-card-actions>
    <v-card-text class="default-text-size text-center">
      Have an account? <span @click="loginUserLink" class="text-color-link">Login now</span>
    </v-card-text>
  </v-card-text>

  </div>

</template>
<script>
import {mapActions} from "vuex";
import {get} from 'vuex-pathify';
import RegisterApi from '@/apilinks/register';
import router from "@/routes";

export default {
  data: () => ({
    now_date:new Date().toISOString().slice(0,10),
    user_credentials:{
      username:'',
      first_name:'',
      last_name:'',
      birthday:'',
      password:'',
      confirm_password:''
    },
    text_required: [val => (val || '').length > 0 || 'This field is required'],
    select_required:[v => !!v || 'Must select an date'],
    password_contains:[
      val => (val || '').length > 0 || 'This field is required',
        val => val &&  /\d/.test(val) || 'At least one digit',
      val => val &&   /[A-Z]{1}/.test(val)|| 'At least one capital latter',
      val => val && /[^A-Za-z0-9]/.test(val) || 'At least one special character',
      val => val && val.length > 6  || 'Minimum of 6 characters',
    ],
    error_message:'',
    button_allowed:true

  }),
  watch:{
    'user_credentials':{
      deep: true,
      handler(newVal){
          this.button_allowed = (newVal.password !== newVal.confirm_password)
      }
    },
  },
  computed:{
    passwordConfirmationRule() {
      return () =>
          this.user_credentials.password === this.user_credentials.confirm_password || "Password must match";
    },
    is_authenticated:get('authuser/is_authenticated'),
  },
  methods:{
    ...mapActions({
      loginRegisterUser:'authUser/loginRegisterUser'
    }),
    regusterUser(){
      RegisterApi.registerUser(this.user_credentials).then(response => {
          this.loginRegisterUser(response.data)
      }).catch(error => {
        this.error_message = error.response.data.message
      })
    },
    loginUserLink(){
      router.push({name:'LoginPage'})
    }
  }
}
</script>
