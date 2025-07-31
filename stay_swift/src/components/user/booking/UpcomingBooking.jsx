import BookingCard from "./BookingCard";

const UpcomingBooking = ({ bookings }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">⌛️ Upcomming Bookings</h2>

      {bookings.length === 0 && <p>No bookings found.</p>}
      {bookings.map((booking) => (
        <BookingCard
          key={booking._id}
          hotelId={booking?.hotelId}
          checkin={booking?.checkin}
          checkout={booking?.checkout}
        />
      ))}
    </div>
  );
};

export default UpcomingBooking;
