import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './store';
import axios from 'axios';
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter ({
  routes,
  mode: 'history'
});


axios.defaults.baseURL = 'https://black-ops-database.firebaseio.com'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  ('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  ('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
