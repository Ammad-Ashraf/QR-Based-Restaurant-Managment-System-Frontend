import { formatPrice } from '../../utils/formatters';
import useCartStore from '../../store/cartStore';
import useFavoritesStore from '../../store/favouritesStore';
import { toast } from 'react-hot-toast';

function MenuItem({ item }) {
  const addItem = useCartStore((state) => state.addItem);
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const isItemFavorite = useFavoritesStore(state => state.favorites.some(fav => fav._id === item._id));

  const handleAddToCart = () => {
    const cartItem = {
      id: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1
    };
    addItem(cartItem);
    toast.success('Added to cart!', {
      duration: 2000,
      position: 'top-center',
      style: {
        background: '#10B981',
        color: '#FFFFFF',
        padding: '16px',
        borderRadius: '8px',
      },
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(item);
    toast.success(isItemFavorite ? 'Removed from favorites' : 'Added to favorites', {
      duration: 2000,
      position: 'top-center',
      style: {
        background: '#10B981',
        color: '#FFFFFF',
        padding: '16px',
        borderRadius: '8px',
      },
    });
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative rounded-lg">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-2 right-2">
          <button 
            className="p-2 rounded-full bg-white/90 hover:bg-white shadow-sm"
            onClick={handleToggleFavorite}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transition-colors ${
                isItemFavorite ? 'text-red-500 fill-current' : 'text-orange-500'
              }`} 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              fill={isItemFavorite ? 'currentColor' : 'none'}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-orange-400">{formatPrice(item.price)}</span>
          <button
            onClick={handleAddToCart}
            disabled={!item.isAvailable}
            className="px-3 py-2 bg-white text-black rounded-lg font-medium hover:bg-orange-600 
              hover:text-white disabled:bg-gray-200 disabled:text-gray-500 transition-colors"
          >
            + ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;