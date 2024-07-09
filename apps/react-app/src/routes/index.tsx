import { createHashRouter } from "react-router-dom";
import Layout from "../pages/layout";
import ErrorPage from "../pages/error";
import Home from "../pages/home";
import About from "../pages/about";
import Other from "../pages/other";
import Contact from "../pages/contact";
import MicroContain from "../pages/micro-contain";

const router = createHashRouter(
  [
    {
      path: "/",
      // element: <Layout />,
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
            },
            {
              path: "other",
              element: <Other />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "contacts/:contactId",
              element: <Contact />,
              loader: () => ({
                name: "contacts",
              }),
            },
            {
              path: "microReactApp/*",
              element: <MicroContain />,
            },
            {
              path: "microVueApp/*",
              element: <MicroContain />,
            },
            // {
            //   path: "micro-test",
            //   element: <MicroContain />,
            // },
          ],
        },
        { path: "*", element: <ErrorPage /> }, // 路由匹配404
      ],
    },
  ]
  // {
  //   basename: "/app",
  // }
);

export default router;
