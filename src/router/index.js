import Vue from 'vue'
import Router from 'vue-router'

import CreateUser from '../components/profile/CreateUser.vue';
import Users from '../components/profile/Users.vue';
import User from '../components/profile/User.vue';
import Events from '../components/feed/Events.vue';
import News from '../components/feed/News.vue';
import CreateNews from '../components/feed/create/CreateNews.vue';
import NewsPreview from '../components/feed/preview/NewsPreview.vue';
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
      path: '/news/create',
      component: CreateNews
    },
    {
      path: '/news/edit/:id',
      component: CreateNews
    },
    {
      path: '/news/preview',
      component: NewsPreview
    },
    {
      path: '/users',
      component: Users,
    },
    {
      path: '/users/:id',
      component: User
    },
    {
      path: '/users/:id?edit',
      component: User
    },
    {
      path: '/createuser',
      component: CreateUser,
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
