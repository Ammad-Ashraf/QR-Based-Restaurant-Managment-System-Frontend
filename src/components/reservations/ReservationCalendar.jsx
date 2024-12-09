import React from 'react';
import { formatDate } from '../../utils/formatters';

function ReservationCalendar({ selectedDate, onDateChange }) {
  const handlePreviousDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    onDateChange(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    onDateChange(newDate);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePreviousDay}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          ←
        </button>
        <h2 className="text-lg font-semibold">{formatDate(selectedDate)}</h2>
        <button
          onClick={handleNextDay}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          →
        </button>
      </div>

      <div className="text-center text-gray-600">
        <p>Select a date to view available time slots</p>
      </div>
    </div>
  );
}

export default ReservationCalendar;