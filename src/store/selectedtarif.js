export default {
    state: {
        selected: null,
    },
    mutations: {
        SET_SELECTED (state, payload) {
            state.selected = payload
        },
        
    },
    actions: {
        SET_SELECTED({commit}, payload) {
            commit('SET_SELECTED', payload)
        },
    },
    getters: {
        SELECTED (state) {
            return state.selected
        },
    },
    modules: {
    }
}