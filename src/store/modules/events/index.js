import router from '../../../router'

export default {
  state: {
    events: [
      {
        id: 1,
        title: 'Horse licking contest',
        date: '2018-06-01',
        time: '12:00:00',
        location: 'Horse Arena, Budapest',
        description: `Lick the horse! Look at my horse! Lick the horse! Look at my horse! Lick the horse! Look at my horse! Lick the horse! Look at my horse! Lick the horse! Look at my horse! Lick the horse! Look at my horse! Lick the horse! Look at my horse!
                      Lick the horse! Look at my horse! Lick the horse! Look at my horse! Lick the horse! Look at my horse! Lick the horse! Look at my horse! Lick the horse! Look at my horse! Lick the horse! Look at my horse! Lick the horse! Look at my horse!`,
        price: 0,
        capacityMin: 0,
        capacityMax: 0,
      },
      {
        id: 2,
        title: 'Turtle sucking challenge',
        date: '2018-06-02',
        time: '06:00:00',
        location: 'Turtle Palace, Praha',
        description: `Suck the turtle! Look at my turtle! Suck the turtle! Look at my turtle! Suck the turtle! Look at my turtle! Suck the turtle! Look at my turtle! Suck the turtle! Look at my turtle! Suck the turtle! Look at my turtle! Suck the turtle! Look at my turtle!
                      \nSuck the turtle! Look at my turtle! Suck the turtle! Look at my turtle! Suck the turtle! Look at my turtle! Suck the turtle! Look at my turtle! Suck the turtle! Look at my turtle! Suck the turtle! Look at my turtle! Suck the turtle! Look at my turtle!`,
        price: 10,
        capacityMin: 20,
        capacityMax: 100,
      },
    ],
    preview: null
  },
  getters: {
    getEvents: state => state.events,
    getEventById: state => id => state.events.find(event => event.id === id),
    getShortEvents: state => state.events.reduce((result, event) => {
      result.push({
        id: event.id,
        title: event.title,
        date: event.date,
        time: event.time,
        location: event.location
      })
      return result
    }, []),
    getEventPreview: state => state.preview
  },
  mutations: {
    setEventPreview(state, payload) {
      state.preview = payload
    },
    clearEventPreview(state) {
      state.preview = null
    }
},
  actions: {    
    setEventPreview({commit}, event) {
      commit('setEventPreview', event)
    },
    clearEventPreview({commit}) {
      commit('clearEventPreview');
    }
  }
}
    
