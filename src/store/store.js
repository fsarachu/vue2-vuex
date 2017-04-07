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
        increment: state => {
            state.counter += 1;
        },
        decrement: state => {
            state.counter -= 1;
        }
    },
    actions: {
        increment: context => {
            context.commit('increment');
        },
        decrement: context => {
            context.commit('decrement');
        },
        asyncIncrement: ({commit}) => {
            setTimeout(() => {
                commit('increment')
            }, 1000);
        },
        asyncDecrement: ({commit}) => {
            setTimeout(() => {
                commit('decrement')
            }, 1000);
        }
    }
});