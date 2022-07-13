import { authAPI } from "../API/API";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";

let initialState = {
  userId: null,
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
      }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} });

export const authThunk = () => async (dispatch) => {
  let response = await authAPI.auth();
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginThunk = (email, password, rememberMe, setSubmitting) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(authThunk());
    }
  setSubmitting(false);
}

export const logoutThunk = () => async (dispatch) => {
  let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
