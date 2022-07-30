import { UsersType } from './../types/types';
import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "7bd9b998-a47f-45d0-8e25-6248263cc737",
  }
})

export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10
}

export type GetItemsType = {
  items: Array<UsersType>
  totalCount: number
  error: string | null
}

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}