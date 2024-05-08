<template>
  <v-app>
	<mainHeader/>
    <v-main>
		<router-view></router-view>
    </v-main>
	<mainFooter/>
  </v-app>
</template>

<script>
import mainHeader from './components/mainHeader.vue'
import mainFooter from './components/mainFooter.vue'

export default {
  name: 'App',

  components: {
	mainHeader,
	mainFooter,
  },

  data: () => ({
    //
  }),
}
</script>
