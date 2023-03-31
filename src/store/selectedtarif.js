export default {
    state: {
        selectedt: null,
    },
    mutations: {
        SET_SELECTEDT (state, payload) {
            state.selectedt = payload
        },
        
    },
    actions: {
        SET_SELECTEDT({commit}, payload) {
            commit('SET_SELECTEDT', payload)
        },
    },
    getters: {
        SELECTEDT (state) {
            return state.selectedt
        },
    },
    modules: {
    }
}