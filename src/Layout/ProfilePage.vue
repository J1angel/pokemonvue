<template>
  <div>
    <NavBar></NavBar>
    <v-container fluid style="height: 921px" class="mb-12 d-flex flex-column justify-center align-center ">
    <v-main>
        <v-container fluid fill-height>
        <ProfileForm></ProfileForm>
        </v-container>

    </v-main>
    </v-container>
  </div>

</template>
<script>
import ProfileForm from '@/components/ProfileForm'
export default {
  components:{
    ProfileForm
  }
}
</script>
