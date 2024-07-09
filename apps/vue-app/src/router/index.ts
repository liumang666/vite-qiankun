import { createWebHashHistory, createRouter } from "vue-router";

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
  {
    path: "/microVueApp/:pathMatch(.*)*",
    // path: "/microVueApp/:chapters*",
    name: "microVueApp",
    component: () => import("@/views/micro/index.vue"),
  }, // 懒加载
  {
    path: "/microReactApp/:pathMatch(.*)*",
    // path: "/microVueApp/:chapters*",
    name: "microReactApp",
    component: () => import("@/views/micro/index.vue"),
  }, // 懒加载
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
