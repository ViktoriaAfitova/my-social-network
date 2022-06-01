import React from "react";
import style from './myPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map ( (post) => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)

  return (
    <div className={style.postsContainer}>
      <h2 className={style.item}>My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add post</button>
        </div>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
