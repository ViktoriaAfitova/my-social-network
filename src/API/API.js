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
    return instance.get(`users?page=${page}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
    // .then((response) => {
    //   return response.data;
    // });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
    // .then(response => {
    //   return response.data;
    // })
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
    // .then((response) => {
    //   return response.data;
    // });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile)
    // .then(response => {
    //   return response.data;
    // })
  }
}

export const authAPI = {
  auth() {
    return instance.get(`auth/me`)
    .then(response => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete(`auth/login`);
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }
}
