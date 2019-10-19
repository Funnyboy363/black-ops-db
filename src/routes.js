import Home from  './components/Home.vue';
import Contact from './components/Contact';


// const Home = resolve => {
//     require.ensure(['./components/Home.vue'], () => {
//         resolve(require('./components/Home.vue'));
//     });
// };



export const routes = [
    { path: '', component: Home },
    { path: '/Contact', component: Contact}
];