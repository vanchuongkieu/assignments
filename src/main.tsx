import React from "react";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyled from "./layouts/styles/globals.style";

import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import { Provider } from "react-redux";

import App from "./features/App";

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
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyled>
            <ConfigProvider>
              <App />
            </ConfigProvider>
          </GlobalStyled>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
