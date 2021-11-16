import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

 Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyClPkCkjvROBHlb6-R_fVGnbjhPb4NKX7w",
  authDomain: "vue-calendar-b17c2.firebaseapp.com",
  projectId: "vue-calendar-b17c2",
  storageBucket: "vue-calendar-b17c2.appspot.com",
  messagingSenderId: "278754365545",
  appId: "1:278754365545:web:66ac6af176a55a2d8f92f8"
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
