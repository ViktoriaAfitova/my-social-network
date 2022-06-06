import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profileReducer';
import dialoguesReducer from './dialoguesReducer';
import sidebarReducer from './sidebarReducer';

let redusers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  sidebar: sidebarReducer
});

let store = createStore(redusers);

export default store;