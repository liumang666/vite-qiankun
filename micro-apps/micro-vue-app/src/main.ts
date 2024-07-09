import { App, createApp } from "vue";
import "./style.css";
import AppComponent from "./App.vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import routes from "./router";
import { createWebHashHistory, createRouter } from "vue-router";

let app: App;
function render(props: any) {
  const { container } = props;

  let newRoutes = routes;
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    /**
     * 这里的路由需要缓存到pinia或者localstorage,用于渲染菜单
     * routes多级菜单需要做递归处理，这个只展示一级
     */
    newRoutes = routes.map((item) => {
      return {
        ...item,
        path: `/microVueApp${item.path}`,
      };
    });
  }

  const router = createRouter({
    history: createWebHashHistory(),
    routes: newRoutes,
  });

  app = createApp(AppComponent);
  app.use(router).mount(container ? container.querySelector("#app") : "#app");
}

// some code
renderWithQiankun({
  mount(props) {
    console.log("mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: any) {
    console.log("unmount", props, app);
    app.unmount();
  },
  update(props: any) {
    console.log("system app update", props);
    // console.log(props)
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
