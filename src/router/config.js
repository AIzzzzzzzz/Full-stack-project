const routers = [
  {
    path: "/center",
    component: () => import("../views/center/center.vue"),
  },
  {
    path: "/index",
    component: () => import("../views/home/home.vue"),
  },
  {
    path: "/user_manage/adduser",
    component: () => import("../views/user_manage/UserAdd.vue"),
    auth:true
  },
  {
    path: "/user_manage/userlist",
    component: () => import("../views/user_manage/UserList.vue"),
    auth:true
  },
  {
    path: "/news_manage/addnews",
    component: () => import("../views/news_manage/newadd.vue"),
  },
  {
    path: "/news_manage/newslist",
    component: () => import("../views/news_manage/newlist.vue"),
  },
  {
    path: "/product_manage/productadd",
    component: () => import("../views/product-manage/productAdd.vue"),
  },
  {
    path: "/product_manage/productlist",
    component: () => import("../views/product-manage/productList.vue"),
  },
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/notfound/notfound.vue"),
  },
];

export default routers;
