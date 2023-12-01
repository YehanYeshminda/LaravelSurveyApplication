import { createRouter, createWebHistory } from 'vue-router';
import Login from '../Views/Login.vue';
import Register from '../Views/Register.vue';
import Dashboard from '../Views/Dashboard.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import Survey from '../Views/Survey.vue';

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Default',
        component: DefaultLayout,
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/surveys',
                name: 'Survey',
                component: Survey
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
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