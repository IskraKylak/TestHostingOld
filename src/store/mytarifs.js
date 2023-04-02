export default {
    state: {
        mytarifs: JSON.parse(localStorage.getItem('mytraifs')) || [],
    },
    mutations: {
        ADD_MYTARIFS (state, payload) {
            state.mytarifs.push(payload)
            localStorage.setItem('mytraifs', JSON.stringify(state.mytarifs))
        },
        CHANGE_MYTARIFS (state, payload) {
            state.mytarifs[payload.idx] = payload.item
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
            return state.mytarifs
        },
    },
    modules: {
    }
}