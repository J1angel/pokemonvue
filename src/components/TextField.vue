<template>
  <v-text-field
      :prepend-icon="items.icon"
      :label="items.label"
      :type="items.type"
  ></v-text-field>
</template>
<script>
export default {
  props:['items']
}
</script>
