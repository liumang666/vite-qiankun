import { createHashRouter, Link } from "react-router-dom";
import Layout from "../pages/layout";
import ErrorPage from "../pages/error";
import Home from "../pages/home";
import About from "../pages/about";
import Other from "../pages/other";
import Contact from "../pages/contact";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />, // 获取子路由，应用在渲染、加载数据或执行数据突变时抛出错误
          children: [
            {
              // path: "home",
              index: true, // 默认加载的子路由 使用 index 代替 path
              element: <Home />,
              handle: {
                crumb: () => <Link to="/">home</Link>,
              },
            },
            {
              path: "other",
              element: <Other />,
              handle: {
                crumb: () => <Link to="/other">other</Link>,
              },
            },
            {
              path: "about",
              element: <About />,
              handle: {
                crumb: () => <Link to="/about">about</Link>,
              },
            },
            {
              path: "contacts/:contactId",
              element: <Contact />,
              loader: () => ({
                name: "contacts",
              }),
              handle: {
                crumb: (data: any) => <Link to="/contacts/1">{data.name}</Link>,
              },
            },
          ],
        },
        { path: "*", element: <ErrorPage /> }, // 路由匹配404
      ],
    },
  ],
  {
    basename: qiankunWindow.__POWERED_BY_QIANKUN__ ? "/microReactApp" : "/",
  }
);

export default router;
