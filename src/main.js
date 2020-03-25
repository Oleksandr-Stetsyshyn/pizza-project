import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "./firebase-config"

Vue.use(Buefy)
Vue.prototype.$firebase = firebase

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
 