import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import ReduxThunk from "redux-thunk";
import { store } from "./createStore.js";

// export const middlewares = [ReduxThunk]

// export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
// const store = createStore(reducer, applyMiddleware(thunk, logger))

// export const store = createStoreWithMiddleware(reducer)
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
