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
    }
});