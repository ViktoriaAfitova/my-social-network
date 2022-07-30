import { instance, ResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum } from "./API";

type AuthDataType = {
  id: number
  email: string
  login: string
}

type LoginDataType = {
  userId: number
}

export const authAPI = {
  auth() {
    return instance.get<ResponseType<AuthDataType>>(`auth/me`)
      .then(res => res.data);
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
    return instance.post<ResponseType<LoginDataType, ResultCodeEnum | ResultCodeForCaptchaEnum>>(`auth/login`, { email, password, rememberMe, captcha })
      .then(res => res.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  }
}