import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import users from './modules/users'
import news from './modules/news'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth,
    users,
    news
  }
})
