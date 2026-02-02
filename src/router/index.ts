import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import WaitlistView from '../views/WaitlistView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: LandingView },
    { path: '/waitlist', name: 'waitlist', component: WaitlistView },
  ],
})

export default router
