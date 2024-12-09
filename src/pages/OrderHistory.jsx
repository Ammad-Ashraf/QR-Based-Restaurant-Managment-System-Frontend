import React, { useState, useEffect } from 'react';
import { formatDate, formatPrice } from '../utils/formatters';
import LoadingSpinner from '../components/common/LoadingSpinner';
import EmptyState from '../components/common/EmptyState';

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data - replace with actual API call
    setTimeout(() => {
      setOrders([
        {
          id: 1,
          date: new Date(),
          items: [
            { name: 'Pizza Margherita', quantity: 2, price: 12.99 },
            { name: 'Coca Cola', quantity: 2, price: 2.50 }
          ],
          total: 30.98,
          status: 'completed'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (orders.length === 0) {
    return (
      <EmptyState
        title="No Orders Yet"
        message="Your order history will appear here"
        actionText="Browse Menu"
        actionLink="/menu"
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      
      <div className="space-y-6">
        {orders.map(order => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-600">Order #{order.id}</p>
                <p className="text-sm text-gray-600">{formatDate(order.date)}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm capitalize bg-green-100 text-green-800">
                {order.status}
              </span>
            </div>
            
            <div className="border-t border-b py-4 mb-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <span>{item.quantity}x {item.name}</span>
                  <span>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center font-bold">
              <span>Total</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;