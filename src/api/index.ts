import axios from "axios";
const customeAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
customeAxios.interceptors.request.use(
  (config) => {
    const token = process.env.NEXT_PUBLIC_TOKEN;
    if (token) {
      // Configure this as per your backend requirements
      config.headers!["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default customeAxios