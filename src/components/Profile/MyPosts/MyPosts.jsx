import React from "react";
import style from './myPosts.module.css';
import Post from "./Post/Post";
import { useFormik } from 'formik';

const MyPosts = (props) => {
  let postsElement = props.posts.map( (post) => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)

  return (
    <div className={style.postsContainer}>
      <h2 className={style.item}>Posts</h2>
      <div>
        <AddPostForm/>
        {postsElement}
      </div>
    </div>
  );
};

const initialValues = {
  text: ''
}

const onSubmit = (values) => {
  console.log(values)
}

const AddPostForm = (props) => {

  const formik = useFormik({
    initialValues,
    onSubmit
  })

  return (
     <div>
       <form onSubmit={formik.handleSubmit}>
         <div className={style.formControl}>
           <textarea
            className={style.textarea}
            type='text'
            id='text'
            name='text'
            value={formik.values.text}
            onChange={formik.handleChange}
            onSubmit={formik.handleSubmit}
          />
          {formik.errors.text ? <div className={style.error}>{formik.errors.text}</div> : null}
         </div>

        <div><button className={style.btn} type='submit'>Add post</button></div>
      </form>
    </div>
  )

}

export default MyPosts;
