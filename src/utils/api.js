import axios from 'axios';

// Hardcoded fallback for production
const PRODUCTION_API = 'https://restaurant-api-i70b.onrender.com/api';

// If env variable is set (e.g., in Vercel), use that. Otherwise, fallback.
const API_URL = import.meta.env.VITE_API_URL || PRODUCTION_API;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchMenuItems = async (categoryId = null) => {
  const params = categoryId ? { categoryId } : {};
  const response = await api.get('/menu-items', { params });
  return response.data;
};

export const fetchCategories = async () => {
  const response = await api.get('/categories');
  return response.data;
};

export const placeOrder = async (orderData) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

export const fetchReservationSlots = async (date) => {
  const response = await api.get('/reservation-slots', { params: { date } });
  return response.data;
};

export default api;
