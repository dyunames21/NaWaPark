import { createRouter, createWebHistory } from 'vue-router'


const routes = [
	{
      path: "/",
      name: "HomePage",
      component: () => import('../views/HomePage.vue') // [로드 파일]
    },
    {
      path: "/about",
      name: "AboutPage",
      component: () => import('../views/AboutPage.vue') // [로드 파일]
    },
    {
      path: "/board",
      name: "BoardPage",
      component: () => import('../views/Board/BoardPage.vue') // [로드 파일]
    },
    {
      path: "/board/detail",
      name: "BoardDetail",
      component: () => import('../views/Board/BoardDetail.vue') // [로드 파일]
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export {router}