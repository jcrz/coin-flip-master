import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wins: 0,
    losses: 0,
    totalGames: 0,
  },
  mutations: {
    incrementWins(state) {
      state.wins++;
    },
    incrementLosses(state) {
      state.losses++;
    },
    incrementTotalGames(state) {
      state.totalGames++;
    },
  },
  actions: {
    // use this later when we're testing vuex
  },
});
