export default {
    state: {
        mytraifs: JSON.parse(localStorage.getItem('mytraifs')) || [],
    },
    mutations: {
        ADD_MYTARIFS (state, payload) {
            state.mytraifs.push(payload)
            localStorage.setItem('mytraifs', JSON.stringify(state.mytraifs))
        },
        CHANGE_MYTARIFS (state, payload) {
            state.mytraifs[payload.idx] = payload.item
        },
    },
    actions: {
        ADD_MYTARIFS ({commit}, payload) {
            commit('ADD_MYTARIFS', payload)
        },
        CHANGE_MYTARIFS ({commit}, payload) {
            commit('CHANGE_MYTARIFS', payload)
        },
    },
    getters: {
        MYTARIFS (state) {
            return state.mytraifs
        },
    },
    modules: {
    }
}