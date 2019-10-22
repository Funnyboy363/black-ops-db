import Home from  './components/Home.vue';
import Contact from './components/Contact';
import Weapons from './components/WeaponList';

// const Home = resolve => {
//     require.ensure(['./components/Home.vue'], () => {
//         resolve(require('./components/Home.vue'));
//     });
// };



export const routes = [
    { path: '', component: Home },
    { path: '/Contact', component: Contact},
    { path: '/WeaponList', component: Weapons}
];