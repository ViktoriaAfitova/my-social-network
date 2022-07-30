import { authThunk } from "./auth-reducer";

const INITIALIZED_SUCCSESS = "INITIALIZED_SUCCSESS";

let initialState = {
  initialized: false
}

export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCSESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
};

type InitializedSuccsessType = {
  type: typeof INITIALIZED_SUCCSESS
}

export const initializedSuccsess = (): InitializedSuccsessType => ({ type: INITIALIZED_SUCCSESS });

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(authThunk());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccsess());
  })
}

export default appReducer;