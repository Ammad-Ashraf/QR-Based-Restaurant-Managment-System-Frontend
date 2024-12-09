import { create } from 'zustand';
import { fetchMenu } from '../services/api';
import { extractCategories } from '../utils/menuUtils';

const useMenuStore = create((set) => ({
  items: [],
  categories: [],
  loading: false,
  error: null,
  filters: {
    category: null,
    searchQuery: ''
  },

  setFilter: (key, value) => set(state => ({
    filters: {
      ...state.filters,
      [key]: value
    }
  })),

  fetchMenuItems: async () => {
    set({ loading: true, error: null });
    try {
      const items = await fetchMenu();
      const categories = extractCategories(items);
      set({ items, categories, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  reset: () => set({
    items: [],
    categories: [],
    loading: false,
    error: null,
    filters: {
      category: null,
      searchQuery: ''
    }
  })
}));

export default useMenuStore;