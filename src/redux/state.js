import { rerenderEntireThree } from '../render';

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi', likesCount: 12},
      {id: 2, message: 'Hi, how are you?', likesCount: 11}
    ],
    newPostText: 'vika'
  },
  dialoguesPage: {
    personalitiesData: [
      {id: 1, name: 'Ira'},
      {id: 2, name: 'Katya'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Maks'},
      {id: 5, name: 'Vova'},
      {id: 6, name: 'Vika'}
    ],
    messagesData: [
      {id: 1, message: 'Hi'},
      {id: 1, message: 'How are you?'},
      {id: 1, message: 'Yo'},
      {id: 1, message: 'Yey'},
      {id: 1, message: 'Yo'}
    ]
  },
  sidebar: {
    friends: [
      {id: 1, name: 'Katya'},
      {id: 2, name: 'Masha'},
      {id: 3, name: 'Glasha'}
    ]
  }
}

export let addPost = () => {
  let newPost= {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireThree(state);
}

export let updatePostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireThree(state);
}

export default state;