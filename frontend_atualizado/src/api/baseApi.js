import axios from "axios";

// URL base do backend (ajuste se usar proxy no frontend)
export const API_URL = "http://localhost:5000";

// Instância do axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
