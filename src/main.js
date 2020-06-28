import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Vue from 'vue';
import Moment from 'vue-moment';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';

import router from './router';
import App from './App.vue';

Vue.prototype.$http = axios;
Vue.prototype.$serverApiLink = 'http://localhost:8001/api';

Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);
Vue.use(Moment);
Vue.config.productionTip = false;

new Vue({
	axios,
	router,
	render: (h) => h(App),
}).$mount('#app');