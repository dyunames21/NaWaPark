<template>
  <v-app>
    <mainHeader />
    <v-card color="basil">
      <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
        <v-tab v-for="(route, index) in routes" :key="index" :to="route.path">{{ route.name }}</v-tab>
      </v-tabs>
      <transition name="slide" mode="out-in">
        <router-view style="margin-top: 20px;" />
      </transition>
    </v-card>
    <mainFooter />
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
  data() {
    return {
      tab: '',
      routes: [
        {
          path: '/',
          name: 'HomePage',
        },
        {
          path: '/about',
          name: 'AboutPage',
        },
        {
          path: '/board',
          name: 'BoardPage',
        }
      ],
    };
  },
};
</script>

<style>
/* Helper classes */
.bg-basil {
  background-color: #FFFBE6 !important;
}
.text-basil {
  color: #356859 !important;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>
