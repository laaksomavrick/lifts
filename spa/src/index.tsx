import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/app.component";
import AppStore from "./app/app.store";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
