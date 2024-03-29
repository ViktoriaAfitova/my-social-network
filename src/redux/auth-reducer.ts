import { ResultCodeEnum, ResultCodeForCaptchaEnum } from "../API/API";
import { authAPI } from "../API/auth-api";
import { securityAPI } from "../API/security-api";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string |null
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetAuthUserDataPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
type SetAuthUserDataType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} });

type GetCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} });

export const authThunk = () => async (dispatch: any) => {
  let authData = await authAPI.auth();

    if (authData.resultCode === ResultCodeEnum.Success) {
      let {id, email, login} = authData.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean, setSubmitting: any, captcha: string) => async (dispatch: any) => {
  let loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodeEnum.Success) {
      dispatch(authThunk());
    } else {
      if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired ) {
        dispatch(getCaptchaUrl());
      }
      let message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error';
      dispatch(setSubmitting('login', {_error: message}))
    }
  // setSubmitting(false);
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const data = await securityAPI.getCaptchaUrl();
  const captcaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captcaUrl));
}

export const logoutThunk = () => async (dispatch: any) => {
  let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
