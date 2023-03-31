import { createStore } from 'vuex'
import tarifs from './tarifs'
import mytarifs from './mytarifs'
import modal from './modal'
import selectedtarif from './selectedtarif'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tarifs,
    mytarifs,
    modal,
    selectedtarif
  }
})
