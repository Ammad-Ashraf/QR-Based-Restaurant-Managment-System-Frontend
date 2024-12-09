import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { formatPrice } from '../utils/formatters'; // Assuming you have a utility for formatting prices
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useState, useEffect } from 'react';

function OrderTracking() {
  const { orderID } = useParams(); // Get the item name from the URL
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const orderData = location.state; // Get the order data from the location state
  useEffect(() => {
    
    setTimeout(() =>
    {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!orderData)
  {
    return (
      <div className="flex items-center justify-center h-screen text-center">
        <p className="text-gray-600 text-lg">No order data available.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl shadow-2xl p-6 mt-5 mb-10 py-">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-black mb-6">Your Order</h1>

      {/* Order Summary */}
      <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Order Summary</h2>
        <div className=" space-y-1 text-gray-600">
          <p>
            <strong className="text-gray-800">Order ID:</strong> {orderData._id}
          </p>
          <p>
            <strong className="text-gray-800">Order Type:</strong> {orderData.orderType}
          </p>
          <p>
            <strong className="text-gray-800">Status:  </strong>
            <span className="px-3 py-1 rounded-full text-sm capitalize bg-green-100 text-green-800">
              {orderData.status}
            </span>
          </p>
          <p>
            <strong className="text-gray-800">Total Amount:</strong>{' '}
            <span className="text-orange-500 font-medium">
              {formatPrice(orderData.totalAmount)}
            </span>
          </p>
        </div>
      </div>

      {/* Customer Details */}
      <div className="bg-white rounded-lg shadow p-4 mt-4 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Customer Details</h3>
        <div className="space-y-1 text-gray-600">
          <p>
            <strong className="text-gray-800">Address:</strong> {orderData.customerDetails.address}
          </p>
          <p>
            <strong className="text-gray-800">Contact:</strong> {orderData.customerDetails.contact}
          </p>
        </div>
      </div>

      {/* Items Ordered */}
      <div className="bg-white rounded-lg shadow p-4 mt-4 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Items Ordered</h3>
        <ul className="space-y-2">
          {orderData.items.map((item) => (
            <li
              key={item._id}
              className="flex justify-between items-center text-gray-600 bg-gray-50 p-2 rounded-md border border-gray-100"
            >
              <span>
                {item.quantity} x {item.name}
              </span>
              <span className="text-gray-800">{formatPrice(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Special Instructions */}
      <div className="bg-white rounded-lg shadow p-4 mt-4 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Special Instructions</h3>
        <p className="text-gray-600">
          {orderData.specialInstructions || 'No special instructions provided.'}
        </p>
      </div>

    </div>
  );
}

export default OrderTracking;
