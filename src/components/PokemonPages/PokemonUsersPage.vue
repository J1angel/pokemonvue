<template>
  <div>
    <v-card
        elevation="16"
        class="mx-auto"

    >
      <v-card-text  class="d-flex justify-center align-center" >
        <v-card-text >
          <UserReactionsList :items="user_reactions"></UserReactionsList>
        </v-card-text>
      </v-card-text>
      <div v-observe-visibility="handleScrolledToBottom"></div>
    </v-card>
  </div>

</template>
<script>
import UserReactionsList from '@/components/UserReactionsList'
import {get} from "vuex-pathify";
import {mapActions} from "vuex";
export default {
  components:{
    UserReactionsList
  },
  computed:{
    user_reactions: get('userReactions/user_reactions'),
    page:get('userReactions/page'),
    last_page:get('userReactions/last_page'),
  },
  created() {
    this.getUserReactionsNew()
  },
  methods:{
    ...mapActions({
      getUserReactions: 'userReactions/setUserReactions',
      getUserReactionsNew: 'userReactions/setUserReactionsNew',
      changepage:'userReactions/changepage'
    }),
    handleScrolledToBottom(isVisible) {
      if (isVisible) {
        if (isVisible){
          if (this.page < this.last_page){
            this.changepage()
            this.getUserReactions(this.search)
          }
        }
      }
    },
  }
}
</script>
