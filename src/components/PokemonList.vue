<template>
  <div>
  <div  v-if="items.length !== 0">
    <v-row>
      <v-col
          cols="12"
          sm="3"
          v-for="(item, i) in items" :key="`${i}-${item.id}`" align="center" style="font-size: xx-large"
      >
        <v-hover
            v-slot="{ hover }"
            open-delay="200"
        >
          <v-card

              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto text-center d-flex flex-column align-center justify-center"
              height="200"
              max-width="250"
          >
            <v-sheet color="color3">
              <v-card-text>
                <img :src="imageURL + item.id + '.png'" width="120" height="100" alt="">
              </v-card-text>
            </v-sheet>
            {{item.name}}
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

  </div>
  <div v-else class="d-flex justify-center align-center">
    <p style="font-size: xx-large">No Data Avaliable</p>
  </div>
  </div>
</template>
<script>
export default {
  props:['items'],
  data() {
    return {
      imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    }
  },
}
</script>
