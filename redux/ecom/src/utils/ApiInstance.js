import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.1.143:3002",
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    console.log(token);
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  }, 
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);