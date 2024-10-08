import { createWebHistory, createRouter } from 'vue-router';
import Scheduler from '../views/Scheduler';
import NotFound from '../views/Error';
import MeetingConfirmation from '../views/MeetingConfirmation';
import Screener from '../views/Screener';

const routes = [
  {
    path: '/interview/screener/:screenerUuid',
    name: 'Screener',
    component: Screener,
  },
  {
    path: '/interview/schedule/:screenerUuid',
    name: 'Scheduler',
    component: Scheduler,
  },
  {
    path: '/interview/meet/:interviewUuid',
    name: 'Confirmation',
    component: MeetingConfirmation,
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
