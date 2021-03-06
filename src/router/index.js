import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Firebase from 'firebase'

Vue.use(Router)

Vue.use(Router);
const router = new Router({
    routes: [{
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                login: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    let user = Firebase.auth().currentUser;
    let authRequired = to.matched.some(route => route.meta.login);
    if (!user && authRequired) {
        next('login');
    } else if (user && !authRequired) {
        next('home');
    } else {
        next();
    }
})
export default router;