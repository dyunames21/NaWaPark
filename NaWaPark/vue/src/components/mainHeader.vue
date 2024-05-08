<template>
  <v-app-bar app color="primary">
    <v-toolbar-title>My Website</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/about">About</v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: 'mainHeader'
}
</script>

<style scoped>
/* Add custom styles for your header */
</style>
