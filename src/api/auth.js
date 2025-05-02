import axios from "axios";
import { VITE_API_URL } from "../config.js";

export const registerRequest = (user) =>
  axios.post(`${VITE_API_URL}/register`, user);

export const loginRequest = (user) => axios.post(`${VITE_API_URL}/login`, user);
