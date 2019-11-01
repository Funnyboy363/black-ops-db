import Home from  './components/Home.vue';
import Contact from './components/Contact';
import Weapons from './components/WeaponList';
import signup from './components/auth/signup';
import signin from './components/auth/signin';
import dashboard from './components/dashboard/dashboard';
import store from './store';




export const routes = [
    { path: '', component: Home,
    beforeEnter (to, from, next) {
        if (store.state.idToken) {
            next()
        } else {
            next('/signin')
        }
    }
},
    { path: '/Contact', component: Contact,
    beforeEnter (to, from, next) {
        if (store.state.idToken) {
            next()
        } else {
            next('/signin')
        }
    }
},
    { path: '/WeaponList', component: Weapons,
    beforeEnter (to, from, next) {
        if (store.state.idToken) {
            next()
        } else {
            next('/signin')
        }
    }
},
    { path: '/signup', component: signup}, 
    { path: '/SignIn', component: signin},
    { path: '/dashboard', component: dashboard,}
];