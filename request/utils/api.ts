import axios from "axios";

const api = axios.create({
   baseURL: 'https://landaki-backend.vercel.app/seller'
});

export default api;