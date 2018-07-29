import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    containers: [],
    error: 'error'
  },
  mutations: {
    setContainers (state, payload) {
      state.containers = payload
    },
    setError (state, msg) {
      state.error = msg
    },
    clearError (state) {
      state.error = ''
    }
  },
  actions: {

  }
})
