import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";


const ConfigureStore = (initialState) => {
  const store = createStore(
    reducers,
    initialState,
   
  );



  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default ConfigureStore;
