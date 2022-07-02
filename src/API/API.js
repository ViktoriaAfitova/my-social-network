import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "7bd9b998-a47f-45d0-8e25-6248263cc737",
  },
});

export const usersAPI = {
  getUsers(page, pageSize) {
    return instance
      .get(`users?page=${page}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  profile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response => {
      return response.data;
    })
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status}).then((response) => {
      return response.data;
    });
  }
};

export const authAPI = {
  auth() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = null) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  }
}
