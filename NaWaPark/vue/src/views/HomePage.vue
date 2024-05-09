<template>
  <v-card color="basil">
    <div class="container" style="touch-action: manipulation;">
      <div class="subscription-form-container">
        <v-img class="subscription-image" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
        <SubscriptionForm />
      </div>
    </div>
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.subscription-form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.subscription-image {
  width: 100%; /* 부모 요소에 맞게 너비를 설정 */
  max-width: 400px; /* 최대 너비 지정 (선택 사항) */
  height: auto; /* 높이를 자동으로 조절하여 측면 비율 유지 */
}

/* 너비가 600px 이상인 경우 */
@media (min-width: 600px) {
  .subscription-form-container {
    flex-direction: row; /* 요소를 가로로 배치 */
    align-items: center; /* 요소를 수직으로 중앙에 정렬 */
  }

  .subscription-image {
    margin-right: 20px; /* 이미지와 폼 사이 간격 조정 */
    width: 400px; /* 너비를 고정 */
    height: 300px; /* 높이를 고정 */
  }
}
</style>
