import qs from 'qs';
import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/api" : "",
  timeout: 9000
});

//请求时发送公共的参数
request.interceptors.request.use(config => {
  if (!(config.data instanceof FormData)) {
    config.method === 'post'
      ? (config.data = qs.stringify({ ...config.data }))
      : (config.params = { ...config.params });
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return config;
});

//请求响应后的拦截
request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // const { status, data } = error.response;
    console.error(error);
  }
);

export default request;
