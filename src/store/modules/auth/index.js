import router from '../../../router'

export default {
    state: {
        isLogged: false
    },
    getters: {
        isLogged: state => state.isLogged
    },
    mutations: {
        setIsLogged(state, isLogged) {
            state.isLogged = isLogged
        }
    },
    actions: {
        signIn({commit}, payload) {
            commit('setIsLogged', true)
            router.push({path: '/'})
        },
        signOut({commit}, payload) {
            console.log('SIGONUT')
            commit('setIsLogged', false)
            router.replace({path: '/'})
        }
    }
}