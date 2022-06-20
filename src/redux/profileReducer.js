import { profileAPI } from "../API/API";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi", likesCount: 12 },
    { id: 2, message: "Hi, how are you?", likesCount: 11 },
  ],
  // newPostText: "vika",
  profile: null,
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
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => {
  return {
      type: SET_USER_PROFILE,
      profile
  }
}
export const profileThunkCreator = (userId) => async (dispatch) => {
  try {
      let data = await profileAPI.profile(userId);
      dispatch(setUserProfile(data));
  } catch(error) {
      // dispatch(setGlobalError(error))
  }
}

export default profileReducer;
