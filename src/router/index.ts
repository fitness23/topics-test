import { createRouter, createWebHistory } from 'vue-router';
import Topics from '../views/topics.vue';
import NotFound from '../views/404.vue';

const routes = [
    {
        path: '/',
        name: 'topics',
        component: Topics,
    },
    {
        path: "/topics-details/:id",
        name: "topics-details",
        component: () => import("../views/topics.vue"),
      },
    { path: '/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
