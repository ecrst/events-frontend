import router from '../../../router'

export default {
    state: {
        news: [
        {
            id: 1,
            title: 'Title for the first new',
            text: `Text for the first new Text for the
            first newText for the first newText for the first 
            newText for the first newText for the first newText 
            for the first newText for the first newText for the f`,
            role: 'All'
        },
        {
            id: 2,
            title: 'Title for the second new',
            text: `Text for the first new Text for the
            first newText for the first newText for the first 
            newText for the first newText for the first newText 
            for the first newText for the first newText for the f`,
            role: 'All'
        },
        {
            id: 3,
            title: 'Title for the third new',
            text: `Text for the first new Text for the
            first newText for the first newText for the first 
            newText for the first newText for the first newText 
            for the first newText for the first newText for the f`,
            role: 'Members'
        },
        ],
        preview: null    
    },
    getters: {
        getNews(state) {
            return state.news;
        },
        getPreview(state) {
          return state.preview
        },
        getNewsById: state => id => state.news.find(news => news.id === id)
    },
    mutations: {
        setPreview(state, payload) {
          state.preview = payload
        },
        clearPreview(state) {
          state.preview = null
        }
    },
    actions: {    
      setPreview({commit}, news) {
         commit('setPreview', news)
      },
      clearPreview({commit}) {
        commit('clearPreview');
      }
    }
}
    
