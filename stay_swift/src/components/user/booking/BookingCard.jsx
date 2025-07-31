import { singleHotel } from "@/queryes";
import { getDayDifference } from "@/utils";

async function BookingCard({ hotelId, checkin, checkout }) {
  const hotelInfo = await singleHotel(hotelId);
  const days = getDayDifference(checkin, checkout);
  const perNightCost = (hotelInfo?.lowRate + hotelInfo?.highRate) / 2;
  const totalCost = days * perNightCost;

  return (
    <div className="bg-[#F6F3E9] p-4 rounded-md">
      <div className="flex justify-between items-center ">
        <div>
          <h3 className="text-xl font-semibold">{hotelInfo?.name}</h3>
          <div className="text-sm text-gray-600 my-4">
            <p>Check In: {checkin}</p>
            <p>Check Out: {checkout}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-right">${totalCost}</h3>
          <p className="text-sm text-gray-600">
            ${perNightCost} per night x {days}days
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
