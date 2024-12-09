import React, { useState } from 'react';
import useCartStore from '../store/cartStore';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import EmptyState from '../components/common/EmptyState';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Cart()
{
  const { items, orderType, setOrderType} = useCartStore();

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const navigate = useNavigate();

  const handleCheckout = async () => 
  {
    if (!orderType)
    {
      toast.error('Please select an order type');
      return;
    }else if (orderType)
    {
      navigate('/checkout', { state: { orderType } });
      toast.success('Redirecting to Checkout.');
    }
  };

  if (items.length === 0) 
  {
    return (
      <EmptyState
        title="Your Cart is Empty"
        message="Add some delicious items to get started!"
        actionText="Browse Menu"
        actionLink="/menu"
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}

        <CartSummary
          total={total}
          orderType={orderType}
          onOrderTypeChange={setOrderType}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
}

export default Cart;