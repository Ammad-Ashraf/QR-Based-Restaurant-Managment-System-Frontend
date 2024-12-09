import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
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