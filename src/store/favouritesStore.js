import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoritesStore = create(
  persist(
    (set) => ({
      favorites: [],
      
      toggleFavorite: (item) => set((state) => {
        const isFavorite = state.favorites.some(fav => fav._id === item._id);
        if (isFavorite) {
          return {
            favorites: state.favorites.filter(fav => fav._id !== item._id)
          };
        }
        return {
          favorites: [...state.favorites, item]
        };
      }),

      isFavorite: (itemId) => {
        return state => state.favorites.some(item => item._id === itemId);
      },

      clearFavorites: () => set({ favorites: [] })
    }),
    {
      name: 'favorites-storage'
    }
  )
);

export default useFavoritesStore;