import axios from "axios";
import { VITE_API_URL } from "../config.js";

const instance = axios.create({
  baseURL: VITE_API_URL,
  withCredentials: true,
});

export default instance;
