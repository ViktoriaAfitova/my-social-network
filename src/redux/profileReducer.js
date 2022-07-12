import { profileAPI } from "../API/API";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "Hi", likesCount: 12 },
    { id: 2, message: "Hi, how are you?", likesCount: 11 },
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
    }
    case SAVE_PHOTO_SUCCESS: {
      return {...state, profile: {...state.profile, photos: action.file}}
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const updateNewTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (file) => ({ type: SAVE_PHOTO_SUCCESS, file });

export const profileThunkCreator = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(profileThunkCreator(userId));
    }
}

export default profileReducer;
