import { createStore } from "vuex";

export default createStore({
  state: {
    isGetterRouter: false,
    isCollapsed: false, //是否折叠
  },
  getters: {},
  mutations: {
    changeisGetterRouter(start, value) {
      start.isGetterRouter = value;
    },
    changeisCollapsed(start, value) {
      start.isCollapsed = !start.isCollapsed;
    },
  },
  actions: {},
  modules: {},
});
