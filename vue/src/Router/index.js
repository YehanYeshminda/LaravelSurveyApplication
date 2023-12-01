import { createRouter, createWebHistory } from 'vue-router';
import Login from '../Views/Login.vue';
import Register from '../Views/Register.vue';
import Dashboard from '../Views/Dashboard.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import AuthLayout from '../components/AuthLayout.vue';
import Survey from '../Views/Survey.vue';
import store from '../Store';

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Default',
        component: DefaultLayout,
        meta: {
            requiresAuth: true
        },
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
        path: '/auth',
        name: 'Auth',
        redirect: '/login',
        meta: {
            isGuest: true
        },
        component: AuthLayout,
        children: [
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
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'Login' });
    } else if (store.state.user.token && to.meta.isGuest) {
        next({ name: 'Dashboard' });
    } else {
        next();
    }
});

export default router;