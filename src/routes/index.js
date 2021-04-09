import { createWebHistory, createRouter } from 'vue-router';
import Scheduler from '../views/Scheduler';
import NotFound from '../views/Error';

const routes = [
  {
    path: '/interview/schedule/:userUuid',
    name: 'Scheduler',
    component: Scheduler,
  },
  {
    path: '/:catchAll(.*)',
    name: '404 Not Found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
