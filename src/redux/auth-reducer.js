import { authAPI, securityAPI } from "../API/API";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} });

export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} });

export const authThunk = () => async (dispatch) => {
  let response = await authAPI.auth();
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginThunk = (email, password, rememberMe, setSubmitting, captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(authThunk());
    } else {
      if (response.data.resultCode === 10 ) {
        dispatch(getCaptchaUrl());
      }
    }
  setSubmitting(false);
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captcaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captcaUrl));
}

export const logoutThunk = () => async (dispatch) => {
  let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
