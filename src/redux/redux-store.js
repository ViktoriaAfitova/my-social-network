import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profileReducer';
import dialoguesReducer from './dialoguesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from "./usersReduser";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer
});

let store = createStore(redusers);

window.store = store;

export default store;