import {GetItemsType, instance, ResponseType} from './API';

export const usersAPI = {
  getUsers(page: number, pageSize: number) {
    return instance.get<GetItemsType>(`users?page=${page}&count=${pageSize}`)
      .then(res => res.data)
  },
  follow(userId: number) {
    return instance.post<ResponseType>(`follow/${userId}`)
      .then(res => res.data)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>
  }
}

