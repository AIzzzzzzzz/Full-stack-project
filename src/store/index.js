
import { createStore } from "vuex";
import createPersistedstate from 'vuex-persistedstate'
export default createStore({
  state: {
    isGetterRouter: false,
    isCollapsed: false, //是否折叠
    userinfo:{}
  },
  getters: {},
  mutations: {
    changeisGetterRouter(start, value) {
      start.isGetterRouter = value;
    },
    changeisCollapsed(start, value) {
      start.isCollapsed = !start.isCollapsed;
    },
    insertUserInfo(start,value){
      start.userinfo = value
    }
  },
  actions: {},
  modules: {},
  plugins:[
    createPersistedstate({
      key:'user',
      paths:['userinfo']
    })
  ]
});
