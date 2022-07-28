import axios, { AxiosResponse } from "axios";
import { ProfileType } from "../types/types";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "7bd9b998-a47f-45d0-8e25-6248263cc737",
  },
});

export const usersAPI = {
  getUsers(page: number, pageSize: number) {
    return instance.get(`users?page=${page}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId: number) {
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`)
    // .then((response) => {
    //   return response.data;
    // });
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`)
    // .then(response => {
    //   return response.data;
    // })
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, {status: status})
    // .then((response) => {
    //   return response.data;
    // });
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile)
    // .then(response => {
    //   return response.data;
    // })
  }
}

export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10
}

type AuthType = {
  data: {id: number, email: string, login: string}
  resultCode: ResultCodeEnum
  messages: Array<string>
}

type LoginType = {
  data: {userId: number}
  resultCode: ResultCodeEnum | ResultCodeForCaptchaEnum
  messages: Array<string>
}

export const authAPI = {
  auth() {
    return instance.get<AuthType>(`auth/me`).then(res => res.data);
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
    return instance.post<LoginType>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  }
}

instance.get<string>(`auth/me`).then((res: AxiosResponse<string>) => res.data.toLocaleUpperCase())

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }
}
