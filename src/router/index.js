import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login/Login.vue";
import Register from "../views/register/Register.vue";
import NotFound from "../views/error/NotFound.vue";


const routes = [
    {
        path: '/',
        redirect: '/login',
        name: 'Home',
        component: Login
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
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;