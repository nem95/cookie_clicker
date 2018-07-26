import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    defaultCookie: parseFloat(1),
    currentCpS: parseFloat(localStorage.getItem('currentCpS')) || 0.0,
    cookieCounter: parseFloat(localStorage.getItem('cookieCounter')) || 0.0,
    building: {
      cursor: {
        base_price: 15,
        total: parseInt(window.localStorage.getItem('cursor_count')) || 0,
        base_cps: 0.1,
        total_cps: parseFloat(localStorage.getItem('cursor_total_cps')) || 0.0,
      },
      grandma: {
        base_price: 100,
        total: parseInt(localStorage.getItem('grandma_count')) || 0,
        base_cps: 1,
        total_cps: parseFloat(localStorage.getItem('grandma_total_cps')) || 0.0,
      },
    },
  },
  mutations: {
    incrementCookieCounter(state) {
      state.cookieCounter += state.defaultCookie;
      localStorage.setItem('cookieCounter', state.cookieCounter);
    },
    autoIncrementCookieCounter(state, cookies) {
      state.cookieCounter += parseFloat(cookies);
      // console.log(state.cookieCounter, cookies)
      localStorage.setItem('cookieCounter', state.cookieCounter);
    },
    buyBuilding(state, type) {
      const building = state.building[type.building];
      building.total += type.number;
      building.total_cps = parseFloat(building.total * building.base_cps).toFixed(3);
      localStorage.setItem(`${type.building}_count`, building.total);
      localStorage.setItem(`${type.building}_total_cps`, parseFloat(building.total_cps));
    },
    removeCookies(state, number) {
      state.cookieCounter -= number;
      localStorage.setItem('cookieCounter', state.cookieCounter);
    },
  },
  getters: {
    getBuilding: state => buildingName => state.building[buildingName],
  },
  actions: {
    removeCookies(context, number) {
      context.commit('removeCookies', number.price);
    },
    autoIncrementCookieCounter(context, cookies) {
      setInterval(() => {
        let totalCpS = 0.0;

        _.forEach(context.state.building, (value, key) => {
            totalCpS += parseFloat(value.total_cps);
        });

        context.commit('autoIncrementCookieCounter', totalCpS);
      }, 1000);
    },
  },
});
