const SEND_MESSAGE = "SEND-MESSAGE";

type PersonalitiesDataType = {
  id: number
  name: string
}

type MessagesDataType = {
  id: number
  message: string
}

let initialState = {
  personalitiesData: [
    { id: 1, name: "Ira" },
    { id: 2, name: "Katya" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Maks" },
    { id: 5, name: "Vova" },
    { id: 6, name: "Vika" },
  ] as Array<PersonalitiesDataType>,
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yey" },
    { id: 5, message: "Yo" },
  ] as Array<MessagesDataType>,
};

export type InitialStateType = typeof initialState;

const dialoguesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessage;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };

    default:
      return state;
  }
};


type SendMessageCreatorType = {
  type: typeof SEND_MESSAGE
  newMessage: string
}

export const sendMessageCreator = (newMessage: string): SendMessageCreatorType => ( { type: SEND_MESSAGE, newMessage } );

export default dialoguesReducer;
