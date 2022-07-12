import { useFormik } from "formik";
import style from "./loginForm.module.css";
import * as Yup from "yup";

const LoginForm = ({ loginThunk }) => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      loginThunk(formik.values.email, formik.values.password, formik.values.rememberMe, formik.setSubmitting);
      formik.setSubmitting(true);
      console.log(values);
    }
  })


  return (
    <div className={style.containerForm}>
      <form onSubmit={formik.handleSubmit} component="form">

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
        <input type={'checkbox'} id="rememberMe" name="rememberMe" onChange={formik.handleChange} value={formik.values.rememberMe} />remember me
      </div>

      <div><button type="submit">Sign Up</button></div>
      </form>
    </div>
  )
};

export default LoginForm;
