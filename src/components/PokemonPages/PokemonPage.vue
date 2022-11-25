<template>
  <v-card
      elevation="16"
      class="mx-auto"
  >
    <v-card-text class="mb-12 d-flex justify-center align-center" >
      <v-col cols="8">
        <v-text-field label="Search" v-model="search.data"  prepend-inner-icon="mdi-magnify-expand" outlined></v-text-field>
      </v-col>

    </v-card-text>
    <v-card-text  class="d-flex justify-center align-center" >
      <v-card-text>
        <div  v-if="cars.length !== 0">
          <v-row>
            <v-col
                cols="12"
                sm="4"
                v-for="(item, i) in cars" :key="`${i}-${item.id}`" align="center" style="font-size: xx-large"
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
                    :color="item.color.colorcode"
                >
                  <v-sheet color="color3">
                    <v-card-text class="text-left">
                      Name: {{item.name}}<br>
                      Manufacturer: {{item.manufacturer.name}}<br>
                      Type: {{item.type.name}}<br>
                      Color: {{item.color.name}}
                    </v-card-text>
                  </v-sheet>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>

        </div>

        <div v-else class="d-flex justify-center align-center">
          <p style="font-size: xx-large">No Data Avaliable</p>
        </div>
      </v-card-text>

      <div v-observe-visibility="handleScrolledToBottom"></div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      benched: 0,
      toggle_exclusive: null,
      search:{
        data:''
      },
      cars:[]
    }
  },
  methods:{
    handleScrolledToBottom(isVisible){
      if (isVisible){
        console.log(isVisible)
      }
    },
  }

}
</script>
