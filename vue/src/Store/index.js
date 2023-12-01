import { createStore } from 'vuex'

const store = createStore({
    state: {
        user: {
            data: {
                name: 'Yehan',
            },
            token: null,
        }
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
});

export default store;