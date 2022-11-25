<template>
  <div>
    <v-card>
      <v-card-title  class="justify-center" style="font-size: xx-large">
        UPDATE PROFILE
      </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-text-field
                outlined
                v-model="user_credentials.first_name"
                label="First Name"
                type="text"
                :rules="text_required"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
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
        </v-row>

      </v-form>
      <v-card-actions>
        <v-btn color="teal lighten-1" block @click="updateInformation" class="white--text">Register</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>

  </div>
</template>
<script>
import {mapActions} from "vuex";
import {get} from "vuex-pathify";
import UpdateInfoApi from '@/apilinks/updateinformation'
export default {
  data: () => ({
    now_date:new Date().toISOString().slice(0,10),
    user_credentials: {
      first_name: '',
      last_name: '',
      birthday: '',
    },
    text_required: [val => (val || '').length > 0 || 'This field is required'],
    select_required:[v => !!v || 'Must select an date'],
  }),
  computed:{
    user: get('authUser/userinfo')
  },
  created() {
    this.initialize()
  },
  methods:{
    ...mapActions({
      setNavigationPage:'pagesHistory/setNaviagateProfile',
      setUser:'authUser/updateUser'
    }),
    initialize(){
      let {first_name, last_name, birthday} = this.user
      this.user_credentials.first_name = first_name
      this.user_credentials.last_name = last_name
      this.user_credentials.birthday =  birthday
    },
    updateInformation(){
      UpdateInfoApi.updateInformation(this.user_credentials).then(response => {
          this.setUser(response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
