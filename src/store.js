import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex);

export const store =  new Vuex.Store({
    state: {
        defaultCookie: 1,
        cookieCounter: parseInt(localStorage.getItem('cookieCounter')) || 0,
        building: {
            cursor: {
                base_price: 15,
                total: parseInt(localStorage.getItem('cursor_count') || 0),
                base_cps: 0.1,
                total_cps: parseInt(localStorage.getItem('cursor_total_cps') || 0),
            },
            grandma: {
                base_price: 100,
                total: parseInt(localStorage.getItem('grandma_count') || 0),
                base_cps: parseInt(1),
                total_cps: parseInt(localStorage.getItem('grandma_total_cps') || 0),
            }
        }
    },
    mutations: {
        incrementCookieCounter (state) {
            state.cookieCounter += state.defaultCookie;
        },
        buyBuilding (state, type) {
            const building = state.building[type.building]
            building.total += type.number;
            building.total_cps = (building.total * building.base_cps).toFixed(3);
            localStorage.setItem(`${type.building}_count`, building.total);
            localStorage.setItem(`${type.building}_total_cps`, building.total_cps);
        },
        removeCookies (state, number) {
            state.cookieCounter -= number;
            localStorage.setItem('cookieCounter', state.cookieCounter);
        },
    },
    getters: {
        getBuilding: (state) => (buildingName) => {
            return state.building[buildingName];
        }
    },
    actions: {
        removeCookies (context, number) {
            context.commit('removeCookies', number.price)
        }
    }
});