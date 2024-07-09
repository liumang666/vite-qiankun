import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
let instance: any;

const render = (props?: any) => {
  const { container } = props;
  const rootDom = container
    ? container.querySelector("#root")
    : document.querySelector("#root");

  instance = ReactDOM.createRoot(rootDom!);

  instance.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

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
    console.log("unmount", props);
    instance.unmount();
  },
  update(props: any) {
    console.log("system app update", props);
    // console.log(props)
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
