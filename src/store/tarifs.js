export default {
    state: {
        traifs: []
    },
    mutations: {
        SET_TARIFS (state, payload) {
            state.traifs = payload
        },
        
    },
    actions: {
        SET_TARIFS ({commit}, payload) {
            commit('SET_TARIFS', payload)
        },
        GET_TARIFS_FROM_API({commit}) {
            return fetch("http://localhost:3000/post")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                commit('SET_TARIFS', data)
                return data
            }).catch((error) => {
                console.log(error)
                return error
            });
        }
    },
    getters: {
        TARIFS (state) {
            return state.traifs
        },
    },
    modules: {
    }
}