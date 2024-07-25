import axios from "axios";

const { VITE_API_KEY, VITE_API_URL } = import.meta.env;

export const kanEduApi = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    "api-key": VITE_API_KEY,
  },
});

kanEduApi.interceptors.request.use(
  (config: any) => {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
