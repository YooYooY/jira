// import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DevTools, loadServer } from "jira-dev-tool";
import { AppProviders } from "./context";
// import "antd/dist/antd.less";
import "antd/dist/antd.css";

loadServer(() =>
  ReactDOM.render(
    <AppProviders>
      <DevTools />
      <App />
    </AppProviders>,
    document.getElementById("root")
  )
);
