import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import firebase from 'firebase'
import store from "./store"
import Buefy from 'buefy'

import * as firebase from 'firebase' 

import 'buefy/dist/buefy.css'
import "./firebase-config"

import "font-awesome/css/font-awesome.min.css";


// Vue.use(Buefy)
Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content',
})
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);


Vue.prototype.$firebase = firebase;
store.$firebase = firebase;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
