import React from 'react';

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 border-solid"></div>
    </div>
  );
}

export default LoadingSpinner;
