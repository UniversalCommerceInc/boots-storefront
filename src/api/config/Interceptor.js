import axios from "axios";
import LocalStorageService from "../../storage/LocalStorageService";

// console.log("process.env.REACT_APP_PUBLIC_URL,", process.env);
// baseURL: "http://49.206.253.146:1773/",
const instance = axios.create({
  baseURL: "http://106.51.242.196:1709/",
})

const localStorageService = LocalStorageService.getService();
const userAccessToken = localStorageService.getUserAuthAccessToken();
 console.log("userAccessToken", userAccessToken);
// let accesstoken="5cd59bcb6f99cec3fc932e5d6f7fdabea59d96b8bf8d9b7980d2ac4bb955ff19"
// const jwt = localStorage.getItem("jwt");
const wt = localStorage.getItem("wt") || "5010%2CoUdRcpqlX9qipP4lygxsFyr%2BL2e%2Ft0oRlqidJL2tpJWePii3ZQmegZCIjtVPa%2FlK9aocw%2FRTQ34KEZCnU1zgaj71NIQ6lUjOOIB42%2BfcLOaLNoQroPS5M8O56xaV4uAwTYYoO7momE8ELW93aVKZskdCWGjrwWrKPCgfeaQlwzFMTvXfTHS1fqK1KnaWAFYNudyeXOHpaGcT1ijNtx9%2BM5eNt6bUBAFY%2BwWHGI2YYoZ2GwO44k9q8kobs4fTHDibBwOkzO8DTvwJ3BqjBHQnjw%3D%3D"
const wtt = localStorage.getItem("wtt") || "5010%2CV8ifC4CbDJymhzvToXF4JJtW%2FPHz4SdHQ7EPTzwbdQY%3D";
instance.interceptors.request.use(
  (config) => {
    config.headers = {
      "Content-Type": "application/json",
      "wt": wt,
      "wtt": wtt,
    };
    // if (userAccessToken) {
    //   config.headers["wt"] = wt;
    //   config.headers["wtt"] = wtt;
    // }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//Add a response interceptor

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      // history.push( '/not-found' );
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
export default instance;
