import { connectRouter, routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import AppReducer from "./app.reducer";

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

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

const AppStore = createStore(
  connectRouter(history)(AppReducer),
  initialState,
  composedEnhancers
);

export default AppStore;
