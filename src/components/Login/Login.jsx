import React from 'react';
import { useFormik } from 'formik';
import style from './login.module.css';
// import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const LoginForm = ({loginThunk}) => {
  // if(isAuth) {
  //   return <Navigate replace to={`/profile/posts/${userId}`} />
  // }

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      rememberMe: false
    },
      onSubmit: values => {
        // loginThunk(formik.values.login, formik.values.password, formik.values.rememberMe)
        // formik.setSubmitting(true)
        console.log(values)
    },
    validate: values => {
      let errors = {}

      if (!values.login) {
        errors.login = 'Required'
      }

      if (!values.password) {
        errors.password = 'Required'
      }

      return errors;
    }
  })

  // console.log(formik.values)

  return (
    <div className={style.containerForm}>
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor='login' className={style.labelForm}>Login</label>
        <input type='text' id="login" name="login" className={style.inputForm}
          onChange={formik.handleChange}
          value={formik.values.login}
        />

        <label htmlFor='password' className={style.labelForm}>Password</label>
        <input type='password' id="password" name="password" className={style.inputForm}
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <input type={'checkbox'} name="rememberMe" />remember me
        <div><button type="submit">Sign Up</button></div>
      </form>
    </div>
  )
}

const Login = (props) => {

  return (
    <>
      <h1 className={style.titleForm}>Sign Up</h1>
      <LoginForm />
    </>
  )
}

const mapStateToProps = (state) => ({
  isAuth : state.auth.isAuth,
  id: state.auth.id,
})

export default connect (mapStateToProps) (Login);