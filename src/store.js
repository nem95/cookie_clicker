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
        img: 'Cursor.png'
      },
      grandma: {
        base_price: 100,
        total: parseInt(localStorage.getItem('grandma_count')) || 0,
        base_cps: 1,
        total_cps: parseFloat(localStorage.getItem('grandma_total_cps')) || 0.0,
        img: 'Grandma.gif'
      },
      farm: {
        base_price: 1100,
        total: parseInt(localStorage.getItem('farm_count')) || 0,
        base_cps: 8,
        total_cps: parseFloat(localStorage.getItem('farm_total_cps')) || 0.0,
        img: 'Farm.png'
      },
      mine: {
        base_price: 12000,
        total: parseInt(localStorage.getItem('mine_count')) || 0,
        base_cps: 47,
        total_cps: parseFloat(localStorage.getItem('mine_total_cps')) || 0.0,
        img: 'Mine.png'
      },
      factory: {
        base_price: 130000,
        total: parseInt(localStorage.getItem('factory_count')) || 0,
        base_cps: 260,
        total_cps: parseFloat(localStorage.getItem('factory_total_cps')) || 0.0,
        img: 'Factory.png'
      }
    }
  },
  mutations: {
    incrementCookieCounter(state) {
      state.cookieCounter += state.defaultCookie;
      localStorage.setItem('cookieCounter', state.cookieCounter);
    },
    autoIncrementCookieCounter(state, cookies) {
      state.cookieCounter += parseFloat(cookies);
      localStorage.setItem('cookieCounter', state.cookieCounter);
    },
    newCurrentCpS(state, newCpS) {
      state.currentCpS = newCpS;
    },
    buyBuilding(state, type) {
      const building = state.building[type.building];
      building.total += type.number;
      building.total_cps = parseFloat(
        building.total * building.base_cps
      ).toFixed(3);

      localStorage.setItem(`${type.building}_count`, building.total);
      localStorage.setItem(
        `${type.building}_total_cps`,
        parseFloat(building.total_cps)
      );
    },
    removeCookies(state, number) {
      state.cookieCounter -= number;
      localStorage.setItem('cookieCounter', state.cookieCounter);
    }
  },
  getters: {
    getBuilding: state => buildingName => state.building[buildingName],
    cookieCounter: state => state.cookieCounter,
    buildingPrice: state => buildingName => {
      const building = state.building[buildingName];
      const base_price = building.base_price;
      const total_building = building.total;

      let price = (base_price * Math.pow(1.15, total_building)).toFixed(3);

      return parseFloat(price);
    }
  },
  actions: {
    incrementCookieCounter(context) {
      context.commit('incrementCookieCounter');
    },
    removeCookies(context, number) {
      context.commit('removeCookies', number.price);
    },
    autoIncrementCookieCounter(context) {
      setInterval(() => {
        context.commit('autoIncrementCookieCounter', context.state.currentCpS);
      }, 1000);
    },
    newCurrentCpS(context) {
      let newTotalCpS = 0.0;

      _.forEach(context.state.building, value => {
        newTotalCpS += parseFloat(value.total_cps);
      });

      if (newTotalCpS > 0) {
        localStorage.setItem('currentCpS', newTotalCpS);
        context.commit('newCurrentCpS', newTotalCpS);
      }
    },
    buyBuilding(context, type) {
      context.commit('buyBuilding', type);
    }
  }
});
