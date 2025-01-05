import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}/seller`
  //baseURL: 'https://landaki-backend.vercel.app/seller'
});

export default api;