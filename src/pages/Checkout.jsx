import React, { useState } from 'react';
import useCartStore from '../store/cartStore';
import { formatPrice } from '../utils/formatters';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { placeOrder } from '../services/api'; 

function Checkout()
{
  const { items, orderType,clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    address: '',
    contactInfo: '',
    specialInstructions: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => 
  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the order data
    const orderData = 
    {
      customerDetails: {
        address: formData.address,
        contact: formData.contactInfo,
      },
      items: items.map(item => ({
        menuItem: item.id, 
        quantity: item.quantity,
      })),
      orderType: orderType,
      specialInstructions: formData.specialInstructions,
      totalAmount: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };

    try {
      // Make the API call to place the order
      const response = await placeOrder(orderData);
      toast.success('Order placed successfully!');
      clearCart();
      navigate('/order-placing/'+response.data._id, { state: response.data });
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order. Please try again.');
    }
  };


  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-black mb-8 ">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl p-8 rounded-xl "
        >
          <h2 className="text-2xl font-semibold text-black mb-6">Customer Details</h2>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your delivery address"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-yellow-400 focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800">Contact Info</label>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              placeholder="Enter your phone number or email"
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-yellow-400 focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800">
              Special Instructions
            </label>
            <textarea
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              rows="4"
              placeholder="Any specific preferences or instructions?"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-yellow-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-all"
          >
            Place Order
          </button>
        </form>

        {/* Right Side: Order Summary */}
        <div className="bg-gray-50 shadow-2xl p-8 rounded-xl ">
          <h2 className="text-2xl font-semibold text-black mb-6">Order Summary</h2>
          {items.length === 0 ? (
            <p className="text-gray-600 font-semibold text-center">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b border-gray-200 pb-2"
                >
                  <span>
                    {item.name} <span className="text-sm text-gray-500">(x{item.quantity})</span>
                  </span>
                  <span>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
              <div className="flex justify-between font-semibold text-lg mt-4 border-t border-yellow-400 pt-4">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4 border-b border-yellow-400 pt-4">
                <span>Ordertype</span>
                <span>{orderType}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
