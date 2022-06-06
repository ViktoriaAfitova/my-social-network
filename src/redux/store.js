import profileReducer from "./profileReducer";
import dialoguesReducer from "./dialoguesReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi", likesCount: 12 },
        { id: 2, message: "Hi, how are you?", likesCount: 11 },
      ],
      newPostText: "",
    },
    dialoguesPage: {
      personalitiesData: [
        { id: 1, name: "Ira" },
        { id: 2, name: "Katya" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Maks" },
        { id: 5, name: "Vova" },
        { id: 6, name: "Vika" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yey" },
        { id: 5, message: "Yo" },
      ],
      newMessageBody: ""
    },
    sidebar: {
      friends: [
        { id: 1, name: "Katya" },
        { id: 2, name: "Masha" },
        { id: 3, name: "Glasha" },
      ],
    },
  },
  _callSubscriber() {
    console.log("state chanched");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }

};

export default store;
window.state = store;
