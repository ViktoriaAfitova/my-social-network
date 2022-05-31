import React from "react";
import style from './myPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div className={style.item}>my posts</div>
      <div>
        <textarea></textarea>
        <button>add post</button>
        <Post message='hi' like='like' />
        <Post message='hello' />
      </div>
    </div>
  );
};

export default MyPosts;
