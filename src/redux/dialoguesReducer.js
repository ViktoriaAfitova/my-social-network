const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
  newMessageBody: "",
};

const dialoguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialoguesReducer;
