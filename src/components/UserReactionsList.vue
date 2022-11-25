<template>
  <v-row>
    <v-col
        cols="12"
        sm="12"
        v-for="(item, i) in items" :key="`${i}-${item.id}`" align="center" style="font-size: xx-large"
    >
      <v-hover
          v-slot="{ hover }"
          open-delay="200"
      >
        <v-card

            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto text-left flex-column align-center justify-center"
        >
          <v-card-text>
            <v-sheet style="font-size: xx-large">
              {{item.first_name+' '+item.last_name}}
              <v-card-text>
                <v-row>
                  <v-col cols="6" class="text-center" v-if="item.likers.length > 0">
                    <v-row>
                      <v-col v-for="(like,i) in item.likers" :key="i" class="text-center">
                        <img :src="like.image_link" width="120" height="100" alt=""><br>
                        {{like.pokemon_name}}
                      </v-col>
                    </v-row>
                    <v-icon  color="red darken-3" x-large>mdi-thumb-up</v-icon>
                  </v-col>
                  <v-col cols="6" class="text-center" v-if="item.haters.length > 0">
                    <v-row >
                      <v-col v-for="(hate,i) in item.haters" :key="i" class="text-center">
                        <img :src="hate.image_link" width="120" height="100" alt=""><br>
                        {{hate.pokemon_name}}
                      </v-col>
                    </v-row>
                    <v-icon   color="blue-grey darken-1" x-large>mdi-thumb-down</v-icon>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-sheet>
          </v-card-text>


        </v-card>
      </v-hover>
    </v-col>
  </v-row>

</template>
<script>
export default {
  props:['items'],
}
</script>
