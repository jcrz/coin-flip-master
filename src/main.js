import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App),
});

app.$mount('#app');

// the if check ensures that this only happens in testing
// this is a security concern and should always happen
if (window.Cypress) {
  window.app = app;
}
