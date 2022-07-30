import { profileAPI } from "../API/profile-api";
import { ProfileType, PostType, PhotosType } from "../types/types";

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
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any) => {
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
        newPostText: '',
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
      return {...state, profile: {...state.profile, photos: action.photos}}
    }
    default:
      return state;
  }
}

type AddPostActionCreatorType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({ type: ADD_POST, newPostText });
type UpdateNewTextActionCreatorType = {
  type: typeof UPDATE_NEW_POST_TEXT
  newText: string
}
export const updateNewTextActionCreator = (text: string): UpdateNewTextActionCreatorType => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({ type: SET_USER_PROFILE, profile });
type SetStatusType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusType => ({ type: SET_STATUS, status });
type DeletePostType = {
  type: typeof DELETE_POST
  postId: number
}
export const deletePost = (postId: number): DeletePostType => ({ type: DELETE_POST, postId });
type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const profileThunkCreator = (userId: number) => async (dispatch: any) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
  let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
      dispatch(profileThunkCreator(userId));
    }
}

export default profileReducer;
