import Vue from 'vue';
import App from './App.vue';
import 'es6-promise/auto';

import { store } from './store.js';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
