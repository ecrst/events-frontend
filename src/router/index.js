import Vue from 'vue'
import Router from 'vue-router'

import Profile from '../components/profile/Profile.vue';
import Events from '../components/feed/Events.vue';
import News from '../components/feed/News.vue';
import AuthVuew from '../components/auth/AuthView.vue';
import Login from '../components/auth/Login.vue';
import Signup from '../components/auth/Signup.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/events'},
    {
      path: '/events',
      component: Events,
    },
    {
      path: '/news',
      component: News,
    },
    {
      path: '/profile',
      component: Profile,
    },

        {
          path: '/auth/login',
          component: Login
        },
        {
          path: '/auth/signup',
          component: Signup
        }

  ]
})
