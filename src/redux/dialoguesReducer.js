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
};

const dialoguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = action.message;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: newMessage }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (message) => { return { type: SEND_MESSAGE, message } };

export default dialoguesReducer;
