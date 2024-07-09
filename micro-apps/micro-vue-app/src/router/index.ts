const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
  }, // 懒加载
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about-chunk" */ "@/views/about/index.vue"),
  }, // 懒加载 - 加分包
  {
    path: "/route",
    name: "route",
    component: () => import("@/views/route/index.vue"),
  }, // 懒加载
];

export default routes;
