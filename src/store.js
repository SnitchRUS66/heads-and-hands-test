import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    officeAddressCoords: []
  },
  mutations: {
    setOfficeAddress(state, coords) {
      state.officeAddressCoords = coords;
    }
  },
  actions: {}
});
