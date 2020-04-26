import Vue from 'vue'
import app from './app.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { app},
  template: '<app/>'
})
