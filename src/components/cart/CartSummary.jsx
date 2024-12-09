import React from 'react';
import { formatPrice } from '../../utils/formatters';

function CartSummary({ total, orderType, onOrderTypeChange, onCheckout}) {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold">Order Type:</span>
        <select
          value={orderType || ''}
          onChange={(e) => onOrderTypeChange(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Select Type</option>
          <option value="dine-in">Dine-In</option>
          <option value="takeaway">Takeaway</option>
        </select>
      </div>

      <div className="flex justify-between items-center text-xl font-bold mb-6">
        <span>Total:</span>
        <span>{formatPrice(total)}</span>
      </div>

      <button
        onClick={onCheckout}
        disabled={!orderType}
        className="w-full bg-yellow-400 font-semibold text-black py-3 rounded-lg hover:bg-yellow-500 disabled:bg-gray-400 text-md "
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartSummary;