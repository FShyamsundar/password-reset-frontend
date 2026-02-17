import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/auth';

export const signup = (data) => axios.post(`${API_URL}/signup`, data);

export const login = (data) => axios.post(`${API_URL}/login`, data);

export const forgotPassword = (data) => axios.post(`${API_URL}/forgot-password`, data);

export const resetPassword = (token, data) => axios.post(`${API_URL}/reset-password/${token}`, data);
