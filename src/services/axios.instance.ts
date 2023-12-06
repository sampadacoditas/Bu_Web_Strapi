import axios from "axios";
import { FORM_HEADERS } from "@/constants/constants";

const axiosInstance = (baseURL?: string) => {
  const instance = axios.create({
    baseURL: baseURL || "",
  });

  instance.interceptors.request.use(config => {
    const temp: any = {
      "Content-Type": FORM_HEADERS.applicationJson,
      ...config.headers,
    };
    config.headers = temp;
    return config;
  });

  instance.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      const originalRequest = error.config;
      if (error?.response?.status === 401 || error?.response.status === 403 || error?.response.status === 406) {
        originalRequest._retry = true;
        return error?.response;
      } else {
        return;
      }
    },
  );

  return instance;
};

export default axiosInstance;
