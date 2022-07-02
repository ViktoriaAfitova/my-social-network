import React from 'react';
import { useFormik } from 'formik';
import style from './login.module.css';
// import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginThunk } from '../../redux/auth-reducer';

const LoginForm = ({loginThunk}) => {
  // if(isAuth) {
  //   return <Navigate replace to={`/profile/posts/${userId}`} />
  // }


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },

    onSubmit: values => {
      loginThunk(formik.values.email, formik.values.password, formik.values.rememberMe, formik.setSubmitting);
      formik.setSubmitting(true);
    },

    validate: values => {
      let errors = {};

      if(!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
        errors.login = 'Invalid format';
      }

      if(!values.password) {
        errors.password = 'Required';
      // } else if (/^(?:(?![\s\n]+$)[\s\S])+$/.test(values.text)) {
      //   errors.password = 'Invalid format'
      }

      // if(!values.rememberMe) {
      //   errors.rememberMe = 'Required';
      // }

      return errors;
    }
  })

  // console.log(formik.values)

  return (
    <div className={style.containerForm}>
      <form onSubmit={formik.handleSubmit}>

      <div className={style.formControl}>
        <label htmlFor='email' className={style.labelForm}>Email</label>
        <input type='email' id="email" name="email" className={style.inputForm}
          onChange={formik.handleChange}
          value={formik.values.login}
        />
        {formik.errors.email ? <div className={style.error}>{formik.errors.email}</div> : null}
      </div>

      <div className={style.formControl}>
        <label htmlFor='password' className={style.labelForm}>Password</label>
        <input type='password' id="password" name="password" className={style.inputForm}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div className={style.error}>{formik.errors.password}</div> : null}
      </div>

      <div className={style.formControl}>
        <input type={'checkbox'} name="rememberMe" />remember me
        {/* {formik.errors.rememberMe ? <div className={style.error}>{formik.errors.rememberMe}</div> : null} */}
      </div>

      <div><button type="submit">Sign Up</button></div>
      </form>
    </div>
  )
}

const Login = ({loginThunk}) => {

  return (
    <>
      <h1 className={style.titleForm}>Sign Up</h1>
      <LoginForm loginThunk={loginThunk}  />
    </>
  )
}

const mapStateToProps = (state) => ({
  isAuth : state.auth.isAuth,
  id: state.auth.id,
})

export default connect(mapStateToProps, {loginThunk}) (Login);