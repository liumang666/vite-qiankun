import { Message } from "@arco-design/web-vue";
import { AxiosInstance } from "../types/fetch";
import axios, { AxiosError, AxiosResponse, AxiosHeaders } from "axios";

const errorCode: any = {
  "401": "认证失败，无法访问系统资源",
  "404": "访问资源不存在",
};
const fetch = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  timeout: 40 * 1000,
});

// 添加请求拦截器
fetch.interceptors.request.use(
  (config: any) => {
    const headers = config.headers as AxiosHeaders;
    const token = localStorage.getItem("token");
    if (config.headers && token) {
      headers.set("Authorization", "Bearer " + token);
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

//添加响应拦截器
fetch.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    const code = response?.data?.code || response.status;
    const msg =
      errorCode[code] ||
      response.data.errorMsg ||
      response.data.msg ||
      response.data.message;

    if (code !== 200) {
      Message.error(msg);
      return Promise.reject(response.data || response);
    }
    return Promise.resolve(response.data);
  },
  (error: AxiosError<any, XMLHttpRequest>) => {
    const code = error?.response?.status || 200;
    const msg =
      errorCode[code] ||
      error?.response?.data.errorMsg ||
      error?.response?.data?.msg ||
      error?.response?.data?.message;

    if (code !== 200) {
      Message.error(msg);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

const useFetch = () => {
  return fetch as AxiosInstance;
};

export default useFetch;
