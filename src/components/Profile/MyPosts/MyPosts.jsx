import React from "react";
import style from './myPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator, updateNewTextActionCreator } from "../../../redux/state";

const MyPosts = (props) => {
  let postsElement = props.posts.map( (post) => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let postChange = () => {
    // let text = newPostElement.current.value;
    let action = (updateNewTextActionCreator());
    props.dispatch(action);
  }

  return (
    <div className={style.postsContainer}>
      <h2 className={style.item}>My posts</h2>
      <div>
        <div>
          <textarea
            onChange={postChange}
            ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={ addPost } >Add post</button>
        </div>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
