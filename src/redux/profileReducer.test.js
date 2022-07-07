import profileReducer, { addPostActionCreator, deletePost } from './profileReducer';

let state = {
  posts: [
    { id: 1, message: "Hi", likesCount: 12 },
    { id: 2, message: "Hi, how are you?", likesCount: 11 },
  ]
}

test('new post should be added', () => {
  let action = addPostActionCreator('test text');
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
})

test('new message should be added', () => {
  let action = addPostActionCreator('test text');
  let newState = profileReducer(state, action);
  expect(newState.posts[2].message).toBe('test text');
})

test('after deleting length of messages should be decrement', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
})

test(`after deleting length of messages shouldn't be decrement if id is incorrect`, () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
})

