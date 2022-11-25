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
export default {

}
</script>
