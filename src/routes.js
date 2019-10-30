import Home from  './components/Home.vue';
import Contact from './components/Contact';
import Weapons from './components/WeaponList';
import signup from './components/auth/signup';
import signin from './components/auth/signin';
import dashboard from './components/dashboard/dashboard';




export const routes = [
    { path: '', component: Home },
    { path: '/Contact', component: Contact},
    { path: '/WeaponList', component: Weapons},
    { path: '/signup', component: signup}, 
    { path: '/SignIn', component: signin},
    { path: '/dashboard', component: dashboard}
];