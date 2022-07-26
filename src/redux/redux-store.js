import { combineReducers, legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profileReducer.ts";
import dialoguesReducer from "./dialoguesReducer.ts";
import sidebarReducer from "./sidebarReducer.ts";
import usersReducer from "./usersReduser.ts";
import authReducer from "./auth-reducer.ts";
import appReducer from "./app-reducer.ts";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;
export default store;
