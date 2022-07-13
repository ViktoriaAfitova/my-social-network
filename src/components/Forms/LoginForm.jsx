import { Formik, Form } from "formik";
import style from "./loginForm.module.css";
import * as Yup from "yup";

const LoginForm = ({ loginThunk }) => {

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().min(8, 'Too short').max(50, 'Too long').required("Required"),
  })

  const onSubmit = (values, { setSubmitting }) => {
    loginThunk(values.email, values.password, values.rememberMe, setSubmitting);
    // alert("Form is validated!");
    setSubmitting(true);
    // console.log(values);
  }

  return (
    <div className={style.containerForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
      {
        formik => {
          return <Form>

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

            <div><button type="submit" disabled={!formik.isValid} >Sign Up</button></div>
          </Form>
        }
      }

      </Formik>
    </div>
  )
}

export default LoginForm;
