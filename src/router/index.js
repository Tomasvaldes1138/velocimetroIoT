import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: () => import('../views/landingComponent.vue'),
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/loginComponent.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/dashboardComponent.vue'),
        }
        
    ]})

export default router