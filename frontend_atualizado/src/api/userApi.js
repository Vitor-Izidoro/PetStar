import axios from 'axios';
const API_URL = 'http://localhost:5000/api/users';

export const register = (data)=>axios.post(`${API_URL}/register`,data);
export const login = (data)=>axios.post(`${API_URL}/login`,data);
export const getProfile = (token)=>axios.get(`${API_URL}/profile`,{ headers:{ Authorization:`Bearer ${token}` }});
