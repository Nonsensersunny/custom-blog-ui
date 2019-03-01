import Vue from 'vue'
import vuex from 'vuex'
import * as types from './types'

Vue.use(vuex)

const state = {
    user: {},
    token: null,
    title: ''
}

const mutations = {
    [types.LOGIN]: (state, data) => {
        localStorage.token = data;
        state.token = token;
    },
    [types.LOGOUT]: (state) => {
        localStorage.removeItem('token');
        state.token = null;
    },
    [types.TITLE]: (state, data) => {
        state.title = data;
    }
}

export default new vuex.Store({
    state,
    mutations
})