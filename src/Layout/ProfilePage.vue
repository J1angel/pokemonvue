<template>
  <div>
    <NavBar></NavBar>

    <v-main>
      <ProfileForm></ProfileForm>
    </v-main>
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
