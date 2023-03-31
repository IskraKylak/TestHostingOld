export default {
    state: {
        active: false
    },
    mutations: {
        SET_MODAL_ACTIVE(state, isActive) {
            state.active = isActive
        }
        
    },
    actions: {
        setModalActive({ commit }, isActive) {
            commit('SET_MODAL_ACTIVE', isActive)
        }
    },
    getters: {
        ACTIVEMODAL (state) {
            return state.active
        },
    },
    modules: {
    }
}