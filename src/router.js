import Vue from 'vue';
import VueRouter from 'vue-router';

import { Home, UserRegistration } from '@pages';

Vue.use(VueRouter);

const routes = [
    {
        component: Home,
        name: 'home',
        path: '/'
    },
    {
        component: UserRegistration,
        name: 'user-registration',
        path: '/user-registration'
    },
    {
        path: '*',
        redirect: 'home'
    }
];

const Router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
});

export default Router;
