import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { authThunk } from "./auth-reducer";
import { AppStateType } from "./redux-store";

const INITIALIZED_SUCCSESS = "INITIALIZED_SUCCSESS";

export type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false
}

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

type ActionType = InitializedSuccsessType
type DispatchType = Dispatch<ActionType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(authThunk());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccsess());
  })
}

export default appReducer;