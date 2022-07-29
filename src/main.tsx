import React from "react";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyled from "./layouts/styles/globals.style";

import App from "./pages/_app";
import { Provider } from "react-redux";
import store from "./redux/store";

ConfigProvider.config({
  theme: {
    primaryColor: "#00B0D7",
  },
});

const mountNode = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(mountNode);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyled>
          <ConfigProvider>
            <App />
          </ConfigProvider>
        </GlobalStyled>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
