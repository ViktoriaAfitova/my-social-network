import { authAPI } from "../API/API";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        // isAuth: true
      }

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {id, email, login, isAuth} });

export const authThunk = () => async (dispatch) => {
  let data = await authAPI.auth();
  if (data.resultCode === 0) {
    let {id, login, email} = data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
}

export default authReducer;
