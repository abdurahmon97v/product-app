import axios from "axios";
import { loadState } from "../utils/storage";

const request = axios.create({ baseURL: import.meta.env.VITE_APP_URL });

request.interceptors.request.use((config) => {
  const token = loadState("token");
  config.headers.set("Authorization", `Bearer ${token}`);

  return config;
});

request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      if (window.location.pathname !== "/") {
        window.location.reload();
      }
    }
  }
);

export { request };
