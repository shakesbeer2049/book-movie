import { useState } from "react";

const Booking = ({ bookingDetails }) => {
  const [bookingToggle, setBookingToggle] = useState(false);

  let bookings = bookingDetails.map((booking) => (
    <li
      className="bg-gray-300 text-2xl"
      key={booking.date.toString().slice(0, 23)}
    >
      <span className="text-blue-500">{booking.username}</span> booked{" "}
      <span className="text-orange-600">{booking.movie}</span> on{" "}
      {booking.date.toString().slice(0, 24)}
    </li>
  ));

  return (
    <ul className="pl-2 fixed top-1 right-1 z-10">
      <button
        className="bg-orange-500 px-2 py-1 rounded-lg"
        onClick={() => {
          setBookingToggle(!bookingToggle);
        }}
      >
        {bookingToggle ? "Hide" : "Show Bookings"}
      </button>
      {bookingToggle ? bookings : ""}
    </ul>
  );
};
export default Booking;
