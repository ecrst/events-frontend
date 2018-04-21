import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue';
import Feed from '../components/feed/Feed.vue';
import Profile from '../components/profile/Profile.vue';
import Login from '../components/auth/Login.vue';
import Signup from '../components/auth/Signup.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'profile',
          component: Profile
        },
        {
          path: 'feed',
          component: Feed
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})
