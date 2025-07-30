import axios from 'axios';
// Hardcoded fallback for production
const PRODUCTION_API = 'https://restaurant-api-i70b.onrender.com/api';

// If env variable is set (e.g., in Vercel), use that. Otherwise, fallback.
const API_URL = import.meta.env.VITE_API_URL || PRODUCTION_API;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchMenu = async () => {
  try {
    const response = await api.get('/menu');
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch menu items');
  }
};

// Function to place an order
export const placeOrder = async (orderData) => {
  try {
    const response = await api.post('/order/place-order', orderData);
    return response.data; // Return the response data
  } catch (error) {
    throw new Error('Failed to place order: ' + error.message);
  }
};

export default api;
