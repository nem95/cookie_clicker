import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store =  new Vuex.Store({
    state: {
        defaultCookie: 1,
        cookieCounter: parseInt(localStorage.getItem('cookieCounter')) || 0,
    },
    mutations: {
        incrementCookieCounter (state) {
            state.cookieCounter += state.defaultCookie;
        }
    }
});