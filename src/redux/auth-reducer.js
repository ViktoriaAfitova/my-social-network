import { authAPI } from "../API/API";

const SET_USER_DATA = "SET_USER_DATA";

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
        isAuth: true
      }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} });

export const authThunk = () => (dispatch) => {
  authAPI.auth().then(response => {
    if (response.data.resultCode === 0) {
      // let {id, login, email} = response.data.data;
      // dispatch(setAuthUserData(id, login, email, true));
    }
  })
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {
  console.log(email, password, rememberMe)
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.data.resultCode === 0) {
      dispatch(setAuthUserData(response.data.data.userId));
    }
    console.log(response);
  })
}

export const logoutThunk = () => (dispatch) => {
  authAPI.logout().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  })
}

export default authReducer;
