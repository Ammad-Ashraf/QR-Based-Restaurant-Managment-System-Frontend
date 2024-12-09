import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ReservationForm from '../components/reservations/ReservationForm';
import ReservationCalendar from '../components/reservations/ReservationCalendar';
import { fetchReservationSlots } from '../utils/api';

function Reservations() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDateChange = async (date) =>
  {
    setSelectedDate(date);
    setLoading(true);
    try 
    {
      const slots = await fetchReservationSlots(date.toISOString());
      setAvailableSlots(slots);
    } catch (error)
    {
      toast.error('Failed to fetch available slots');
      console.error('Error fetching slots:', error);
    } finally
    {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-8">Table Reservations</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ReservationCalendar 
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />
        <ReservationForm 
          selectedDate={selectedDate}
          availableSlots={availableSlots}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default Reservations;