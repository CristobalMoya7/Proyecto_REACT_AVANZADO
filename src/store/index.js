import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import * as reducers from "./reducer";
import * as actionCreators from "./actions";

const reducer = combineReducers(reducers);

export default function configureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools({ actionCreators })(),
  );
  return store;
}
