import React from 'react';
import { Link } from 'react-router-dom';

function EmptyState({ title, message, actionText, actionLink }) {
  return (
    <div className="text-center py-20  mx-4 md:mx-auto max-w-3xl">
      <h2 className="text-3xl font-extrabold text-black mb-6">{title}</h2>
      <p className="text-gray-700 text-lg mb-10">{message}</p>
      {actionText && actionLink && (
        <Link
          to={actionLink}
          className="px-6 py-4 text-md font-semibold bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 focus:ring-orange-400 transition"
        >
          {actionText}
        </Link>
      )}
    </div>
  );
}

export default EmptyState;
