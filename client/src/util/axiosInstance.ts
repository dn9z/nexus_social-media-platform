import axios from "axios";

const axiosApiInstance = axios.create();

//defining the settings for our axios instance.
axiosApiInstance.defaults.baseURL = "http://localhost:3000";
axiosApiInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosApiInstance.defaults.withCredentials = true;

//intercepts requests.
axiosApiInstance.interceptors.request.use(
  (config) => {
    // console.log("A request has been made");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//intercepts responses.
axiosApiInstance.interceptors.response.use(
  (config) => {
    // console.log("A respones has been received");
    return config;
  },
  (error) => {
    console.log("Error response has been received", error.response);
    console.log(error.response.status)
    if (error.response.status === 401) {
      console.log("We hit 401, token must not be valid");
      window.location.href = "/logout"; // added .href for TS
    }

    return Promise.reject(error);
  }
);

export default axiosApiInstance;
