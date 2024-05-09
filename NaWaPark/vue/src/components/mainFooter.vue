<template>
  <v-footer class="bg-basil text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

	<h5 class="font-weight-bold text-h5 text-basil">Footer</h5>

  </v-footer>
</template>



<script>
  export default {
    data: () => ({
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    }),
  }
</script>

<style scoped>
/* Helper classes */
.bg-basil {
  background-color: #356859 !important;
}
.text-basil {
  color: #FFFBE6 !important;
}
</style>
