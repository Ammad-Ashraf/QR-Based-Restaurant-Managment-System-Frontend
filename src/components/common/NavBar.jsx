import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center">
            <img
              src="/assests/mainLogo.webp"
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-black text-xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
            >
              <FaShoppingCart />
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>

            <Link
              to="/reservations"
              className="flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
            >
              <FaUser />
              <span>Reservations</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-2"
            >
              <div className="flex flex-col space-y-2">
                <Link
                  to="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="relative flex items-center justify-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
                >
                  <FaShoppingCart />
                  <span>Cart</span>
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {itemCount}
                    </span>
                  )}
                </Link>

                <Link
                  to="/reservations"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
                >
                  <FaUser />
                  <span>Reservations</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
