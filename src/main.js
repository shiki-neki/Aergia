import _ from 'lodash'
import Vue from 'vue'
import app from './app.vue'
import router from './router'
import './style/main.scss'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { 
    app
  },
  template: '<app/>'
})
