<template>
  <v-container>
	<v-div>
		<SubscriptionForm />
	</v-div>
	
	
	
	
  </v-container>
</template>

<script>
import SubscriptionForm from '../components/SubscriptionForm.vue'

export default {
  name: 'HomePage',

  components: {
    SubscriptionForm
  }
}
</script>

<style scoped>
/* Add custom styles for your homepage */
</style>