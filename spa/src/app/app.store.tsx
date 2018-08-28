import { connectRouter, routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import AppReducer from "./app.reducer";

export const History = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(History), createLogger()];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export const AppStore = createStore(
  connectRouter(History)(AppReducer),
  initialState,
  composedEnhancers
);
