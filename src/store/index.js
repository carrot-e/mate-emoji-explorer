import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: '',
    items: ['elephant', 'snake', 'dog'],
  },
  getters: {
    current: state => state.current,
    items: state => [...state.items].sort(),
  },
  actions: {
    addCurrent({ commit, dispatch }) {
      commit('addCurrent');
      dispatch('updateCurrent', '');
    },
    updateCurrent({ commit }, value) {
      commit('updateCurrent', value);
    },
  },
  mutations: {
    updateCurrent(state, value) {
      state.current = value;
    },
    addCurrent(state) {
      state.items.push(state.current);
    },
  },
});
