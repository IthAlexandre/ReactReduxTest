import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import async from "./middlewares/async";
import stateValidator from "./middlewares/stateValidator";
// import reduxPromise from 'redux-promise';
import reducers from "./reducers";
import thunk from "redux-thunk";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, async, stateValidator)
  );
  return <Provider store={store}>{children}</Provider>;
};
