import React from "react";
import style from './myPosts.module.css';
import Post from "./Post/Post";
import { useFormik } from 'formik';

const MyPosts = (props) => {
  let postsElement = props.posts.map( (post) => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)

  return (
    <div className={style.postsContainer}>
      <h2 className={style.item}>My posts</h2>
      <div>
        <AddPostForm/>
        {postsElement}
      </div>
    </div>
  );
};

const AddPostForm = (props) => {

  const formik = useFormik({
    initialValues: {
      text: ''
    },
    onSubmit: values => {
      console.log(values)
    },
  })

  return (
     <div>
       <form onSubmit={formik.handleSubmit}>
          <textarea
            type='text' id='text' name='text'
            value={formik.values.text}
            onChange={formik.handleChange}
            onSubmit={formik.handleSubmit}
          />
        <div><button type='submit'>Add post</button></div>
      </form>
    </div>
  )

}

export default MyPosts;
