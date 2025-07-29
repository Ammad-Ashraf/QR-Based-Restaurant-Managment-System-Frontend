import { Link } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Importing icons

function Navbar() {
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 py-1">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/home" className="flex items-center">
              <img
                src="/assests/mainLogo.webp" 
                alt="Logo"
                className="h-8 w-30 mr-2"
              />
            </Link>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Link
              to="/cart"
              className="flex items-center space-x-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition"
            >
              <FaShoppingCart />
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Reservations Button */}
            <Link
              to="/reservations"
              className="flex items-center space-x-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition"
            >
              <FaUser />
              <span>Reservations</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
