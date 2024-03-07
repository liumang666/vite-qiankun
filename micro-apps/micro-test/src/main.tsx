import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./public-path";

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
function render(props: any) {
  const { container } = props;
  const root = container
    ? container.querySelector("#root")
    : document.querySelector("#root");

  ReactDOM.createRoot(root!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  //   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  render({});
}

export async function bootstrap() {
  console.log("[react18] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[react18] props from main framework", props);
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  const root = container
    ? container.querySelector("#root")
    : document.querySelector("#root");
  root.unmount();
}
