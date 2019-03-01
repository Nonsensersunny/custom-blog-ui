import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'wired-elements'
import axios from './http/http'
import store from './store/store'
import api from './constant/api'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'

// Vue.use(VueMaterial);

Vue.prototype.$axios = axios;
Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  store,
  api,
  render: h => h(App)
}).$mount('#app')
