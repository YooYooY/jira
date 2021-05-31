// import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { loadDevTools } from "jira-dev-tool";
import { AppProviders } from "./context";
import "antd/dist/antd.less";

loadDevTools(() => {
  ReactDOM.render(
    <AppProviders>
      <App />
    </AppProviders>,
    document.getElementById("root")
  );
});
