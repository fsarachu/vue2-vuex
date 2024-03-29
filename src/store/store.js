import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        stringCounter: state => {
            return `${state.counter} Clicks`;
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        }
    },
    actions: {
        increment: (context, payload) => {
            context.commit('increment', payload);
        },
        decrement: (context, payload) => {
            context.commit('decrement', payload);
        },
        asyncIncrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('increment', payload.by);
            }, payload.delay);
        },
        asyncDecrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            }, payload.delay);
        },
    }
});