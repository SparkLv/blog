import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      $api: {}
    },
    mutations: {
      setApi(state, name, data) {
        state.$api[name] = data;
      }
    }
  });

export default store;