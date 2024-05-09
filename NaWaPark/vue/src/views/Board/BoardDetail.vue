<template>
  <div class="board-detail">
    <div class="image-container">
      <img src='https://cdn.vuetifyjs.com/images/cards/sunshine.jpg' alt="게시물 이미지">
      <h2 class="title">제목입니다!!!</h2>
    </div>
  </div>
  <div class="content">
    글내용입니다.
   </div>
</template>

<script>
export default {
  name: 'BoardDetail',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      // 날짜를 원하는 형식으로 포맷팅하는 메서드
      // 예: YYYY년 MM월 DD일
      return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    }
  }
}
</script>

<style scoped>
.board-detail {
  padding: 20px;
  position: relative; /* 컨테이너를 상대적으로 배치 */
  background-color: white;
  padding: 0px;
}

.image-container {
  position: relative; /* 이미지와 제목을 포함하는 컨테이너를 상대적으로 배치 */
  width: 100%;
}

.image-container img {
  width: 100%; /* 이미지가 컨테이너의 너비를 채우도록 설정 */
  height: auto; /* 이미지의 측면 비율 유지 */
  max-width: 100%; /* 이미지의 최대 너비 설정 */
}

.image-container .title {
  position: absolute; /* 제목을 이미지 위에 절대적으로 배치 */
  top: 50%; /* 이미지의 중앙으로 이동 */
  left: 50%; /* 이미지의 중앙으로 이동 */
  transform: translate(-50%, -50%); /* 제목을 가운데 정렬 */
  color: #fff; /* 텍스트 색상 설정 */
  padding: 5px 10px; /* 내부 여백 설정 */
  font-size: 30px; /* 제목 텍스트 크기 설정 */
  border-radius: 5px; /* 모서리를 둥글게 설정 */
}

.content {
  background-color: white;
  padding: 10px;
}

/* 화면의 너비가 1024px 이상인 경우 */
@media (min-width: 1024px) {
  .image-container img {
    max-width: 100%; /* 이미지의 최대 너비를 500px로 설정 */
	max-height: 400px;
  }
}
</style>
