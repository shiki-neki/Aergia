import Vue from 'vue';
import Router from 'vue-router';

// Page content
import Home from '@/components/home'
import MyCards from '@/components/mycards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mycards',
      name: 'My Cards',
      component: MyCards
    }
  ]
})