import { createStore } from "vuex";

export default createStore({
  state: {
    isGetterRouter: false,
  },
  getters: {},
  mutations: {
    changeisGetterRouter(start, value) {
      start.isGetterRouter = value;
    },
  },
  actions: {},
  modules: {},
});
