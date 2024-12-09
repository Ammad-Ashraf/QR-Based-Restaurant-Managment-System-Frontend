import React from 'react';
import { formatPrice } from '../../utils/formatters';
import useCartStore from '../../store/cartStore';

function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-16 h-16 object-cover rounded"
        />
        <div className="ml-4">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-600">{formatPrice(item.price)}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          className="w-16 p-1 border rounded text-center"
        />
        <button
          onClick={() => removeItem(item.id)}
          className="text-orange-500 hover:text-orange-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;