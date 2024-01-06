import axios from "axios";

export const BASE_URL = "https://ibom-languages-api.onrender.com";

export const serviceClient = axios.create({
  baseURL: BASE_URL,
});
