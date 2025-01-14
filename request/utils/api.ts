import axios from "axios";

const api = axios.create({
  //baseURL: `${process.env.EXPO_PUBLIC_API_URL}/seller`
  //baseURL: 'https://landaki-backend.vercel.app/seller',
   baseURL: 'http://192.168.1.103:3080/seller'
});

export default api;