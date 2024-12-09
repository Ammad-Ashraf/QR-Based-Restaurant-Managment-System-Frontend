import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>Cheezious Copyright &copy; {new Date().getFullYear()} . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;