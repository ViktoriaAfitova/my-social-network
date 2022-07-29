import LoginForm from '../Forms/LoginForm';
import style from './login.module.css';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginThunk } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
  captchaUrl: string | null
  isAuth: boolean
}
type MapDispatchToProps = {
  loginThunk: (email: string, password: string, rememberMe: boolean, captchaUrl: string) => void
}

const Login: React.FC<MapStateToPropsType & MapDispatchToProps> = ({loginThunk, isAuth, captchaUrl}) => {  //userId,

  if (isAuth) {
    return <Navigate replace to={`/profile`} /> //   /${userId}
  }

  return (
    <>
      <h1 className={style.titleForm}>Sign Up</h1>
      <LoginForm loginThunk={loginThunk} captchaUrl={captchaUrl} />
    </>
  )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth : state.auth.isAuth
  // id: state.auth.id,
})

export default connect(mapStateToProps, {loginThunk}) (Login);