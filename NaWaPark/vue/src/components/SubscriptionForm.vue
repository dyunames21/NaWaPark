<template>
  <div id="stb_subscribe" class="subscription-form bg-white text-basil">
    <form action="https://stibee.com/api/v1.0/lists/FAWl6XFX3-tlbEDLaxXOuzCLdwXNgA==/public/subscribers" method="POST" target="_blank" accept-charset="utf-8" class="stb_form" name="stb_subscribe_form" id="stb_subscribe_form" data-lang="" novalidate>
      <h2 class="form-title">구독하기</h2>
      
      <div class="form-group">
        <label for="stb_email" class="form-label">이메일 주소<span class="asterisk">*</span></label>
        <input type="text" class="form-input" id="stb_email" name="email" required="required">
        <div class="form-error" id="stb_email_error"></div>
      </div>
      
      <div class="form-group">
        <label for="stb_name" class="form-label">이름<span class="asterisk">*</span></label>
        <input type="text" class="form-input" id="stb_name" name="name" required="required">
        <div class="form-error" id="stb_name_error"></div>
      </div>
      
      <div class="form-policy">
        <label>
          <input type="checkbox" id="stb_policy" value="stb_policy_true">
          <span> (필수) </span>
          <button id="stb_form_modal_open" data-modal="stb_form_policy_modal" class="form-modal-open-btn" type="button">개인정보 수집 및 이용</button>에 동의합니다.
        </label>
        <div class="form-error" id="stb_policy_error"></div>
        <div class="form-modal blind" id="stb_form_policy_modal">
          <div class="form-modal-body">
            <h2 class="form-modal-title">개인정보 수집 및 이용</h2>
            <div class="form-modal-text">뉴스레터 발송을 위한 최소한의 개인정보를 수집하고 이용합니다. 수집된 정보는 발송 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을 해지할 경우 즉시 파기됩니다.</div>
            <div class="form-modal-btn">
              <button id="stb_form_modal_close" class="form-modal-close-btn" data-modal="stb_form_policy_modal" type="button">닫기</button>
            </div>
          </div>
          <div class="form-modal-bg" id="stb_form_modal_bg"></div>
        </div>
      </div>
      
      <div class="form-policy">
        <label>
          <input type="checkbox" id="stb_ad_agreement" value="stb_ad_agreement_true" required="required">
          <span> (필수) </span>
          <button id="stb_form_ad_modal_open" data-modal="stb_form_ad_agreemnet_modal" class="form-modal-open-btn" type="button">광고성 정보 수신</button>에 동의합니다.
        </label>
        <div class="form-error" id="stb_ad_agreement_error"></div>
        <div class="form-modal blind" id="stb_form_ad_agreemnet_modal">
          <div class="form-modal-body">
            <h2 class="form-modal-title">광고성 정보 수신</h2>
            <div class="form-modal-text">제휴 콘텐츠, 프로모션, 이벤트 정보 등의 광고성 정보를 수신합니다.</div>
            <div class="form-modal-btn">
              <button id="stb_form_ad_modal_close" class="form-modal-close-btn" data-modal="stb_form_ad_agreemnet_modal" type="button">닫기</button>
            </div>
          </div>
          <div class="form-modal-bg" id="stb_form_modal_bg"></div>
        </div>
      </div>
      
      <div class="form-result" id="stb_form_result"></div>
      
      <fieldset class="form-set-submit">
        <!-- 구독하기 버튼 스타일 변경 -->
        <button type="submit" class="form-submit-button" id="stb_form_submit_button">구독하기</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionForm'
}
</script>

<style scoped>
/* 전체 스타일 */
#stb_subscribe {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff; /* 배경색 변경 */
  color: #356859; /* 텍스트 색상 변경 */
}

.form-title {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.asterisk {
  color: red;
  font-weight: bold;
}

.form-policy {
  margin-bottom: 20px;
}

.form-modal {
  display: none;
}

.form-modal-open-btn {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
}

.form-modal-text {
  margin-top: 10px;
}

.form-modal-close-btn {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
}

.form-modal-bg {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* 구독하기 버튼 스타일 변경 */
.form-submit-button {
  width: 100%;
  padding: 10px;
  color: #fff;
  background-color: #356859; /* 배경색 변경 */
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* hover 효과 추가 */
}

.form-submit-button:hover {
  background-color: #2d5249; /* hover시 배경색 변경 */
}

</style>
