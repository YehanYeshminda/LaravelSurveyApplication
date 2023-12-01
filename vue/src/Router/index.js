import { createRouter, createWebHistory } from 'vue-router';
import Login from '../Views/Login.vue';
import Register from '../Views/Register.vue';
import Dashboard from '../Views/Dashboard.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;