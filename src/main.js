import Vue from 'vue';
import App from './App.vue';
import 'es6-promise/auto';

import { store } from './store.js';

Vue.filter('numberFormatter', function(value) {
  const digits = 3;
  value = parseInt(value);

  var si = [
    { value: 1, symbol: '' },
    { value: 1e6, symbol: ' Million' },
    { value: 1e9, symbol: ' Billion' },
    { value: 1e12, symbol: ' Trillion' },
    { value: 1e15, symbol: ' Quatrillion' },
    { value: 1e18, symbol: ' Quintillion' }
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (value >= si[i].value) {
      break;
    }
  }

  return (value / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
