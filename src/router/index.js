import { createRouter, createWebHashHistory } from "vue-router";
import routers from "./config";
import store from "@/store";
const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/mainbox",
    name: "mainBox",
    component: () => import("../views/mainBox.vue"),
    children: [],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    next();
  } else {
    if (!localStorage.getItem("token")) {
      next({ path: "login" });
    }

    if (!store.state.isGetterRouter) {
      router.removeRoute("mainbox")

      if(!router.hasRoute('mainbox')){
        router.addRoute({
          path: "/mainbox",
          name: "mainBox",
          component: () => import("../views/mainBox.vue"),
          children: [],
        },)
      }
      routers.forEach((item) => {
       
        checkPermission(item)&&router.addRoute("mainBox", item);
        
      }
      );
      store.commit("changeisGetterRouter", true);
      next({
        //配置好了没有立即加载，要重新传给他
        path: to.fullPath,
      });

      
    } else {
      next();
    }
  }
});


const checkPermission = (item)=>{
  if(item.auth){
    return store.state.userinfo.role===1
    
  }
  else{
    return true
  }
}

export default router;
