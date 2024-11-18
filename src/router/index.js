import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import CheckView from '../views/CheckView.vue';
import CancelView from '../views/CancelView.vue';
import TestView from '../views/TestView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/cancel',
      name: 'cancel',
      component: CancelView,
    },
    {
      path: '/check',
      name: 'check',
      component: CheckView,
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
  ],
});

export default router;
