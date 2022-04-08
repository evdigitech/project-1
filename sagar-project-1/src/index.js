import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ConfigureStore from "./redux/store";
import "./index.css";
import "@emdgroup-liquid/liquid/dist/css/liquid.css";
import "@emdgroup-liquid/liquid/dist/css/liquid.global.css";
import "@emdgroup-liquid/liquid/dist/css/ld-button.css";
import App from "./App";


ReactDOM.render(
  <Provider store={ConfigureStore()}>
    <Suspense Suspense fallback={<div className="loading" />}>
      <App />
    </Suspense>
  </Provider>,

  document.getElementById("root")
);
