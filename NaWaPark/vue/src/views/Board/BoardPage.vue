<template>
	
	
	<v-container>
		
  <v-row justify="start">
    <v-col
      v-for="(board, index) in boardList"
      :key="index"
      cols="6"
      md="6"
		lg="4"
		xl="3"
	class="px-2"
    >
      <v-card
        class="mx-auto mb-6 bg-basil text-basil"
        max-width="350"
        @mouseenter="hoverCard(index, true)"
        @mouseleave="hoverCard(index, false)"
      >
        <v-img
          :src="board.imageUrl"
          aspect-ratio="1/1"
        ></v-img>

        <v-card-title style="height: auto;">
          {{ board.title }}
        </v-card-title>

        <v-card-subtitle style="margin-bottom: 10px;">
          {{ board.subtitle }}
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      boardList: [
        { imageUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title: 'Top western road trips', subtitle: '1,000 miles of wonder', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.", showDescription: false, hover: false },
        { imageUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title: 'Top western road trips', subtitle: '1,000 miles of wonder', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.", showDescription: false, hover: false },
        { imageUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title: 'Top western road trips', subtitle: '1,000 miles of wonder', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.", showDescription: false, hover: false },
		{ imageUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title: 'Top western road trips', subtitle: '1,000 miles of wonder', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.", showDescription: false, hover: false },

		// Add more board objects here
      ]
    };
  },
  methods: {
    hoverCard(index, isHovered) {
      this.boardList[index].hover = isHovered;
    }
  }
};
</script>

<style scoped>

.bg-basil {
  background-color: #356859 !important;
}
.text-basil {
  color: #FFFBE6 !important;
}
.v-card:hover {
  transition: transform 0.3s ease-in-out;
}
</style>
