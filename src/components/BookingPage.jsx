import React, { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00"
  ]);
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Book a Table</h1>
      <BookingForm availableTimes={availableTimes} />
    </div>
  );
}

export default BookingPage;
