import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

export default new Vuex.Store({
    actions,
    getters: {
        ...getters,
        getField
    },
    mutations: {
        ...mutations,
        updateField
    },
    state
});