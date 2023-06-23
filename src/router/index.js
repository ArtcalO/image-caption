import { createRouter, createWebHistory } from '@ionic/vue-router';
import ListCaptions from '../views/ListCaptions.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: ListCaptions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
