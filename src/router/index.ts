import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import movieDetailsVue from "@/views/movieDetails.vue";

import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: movieDetailsVue,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
