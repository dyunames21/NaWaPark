<template>
	<v-card color="basil">
		<v-div class="subscription-form-container">
			<SubscriptionForm />
		</v-div>
	</v-card>
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
.subscription-form-container {
  padding: 30px; /* Adjust the padding as needed */
}
</style>
