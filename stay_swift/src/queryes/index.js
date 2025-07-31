import { bookingModel } from "@/models/bookings.models";
import { hotelModel } from "@/models/hotels-model";
import { ratingModel } from "@/models/ratings.model";
import { reviewModel } from "@/models/reviews.model";
import { userModel } from "@/models/users.model";
import { isDateInBetween } from "@/utils";

export async function getAllHotels(destination, checkin, checkout, category) {
  const regex = new RegExp(destination, "i");

  const hotelsByDestination = await hotelModel
    .find({ city: { $regex: regex } })
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
      "shortDescription"
    ])
    .lean();
  let allHotels = hotelsByDestination;
  if (category) {
    const categoryArray = category.split("|");
    allHotels = allHotels.filter((hotel) => {
      return categoryArray.includes(hotel.propertyCategory.toString());
    });
  }

  if (checkin && checkout) {
    allHotels = await Promise.all(
      allHotels.map(async (hotel) => {
        const bookings = await findBookings(hotel._id, checkin, checkout);
        if (bookings) {
          hotel["isBooked"] = true;
        } else {
          hotel["isBooked"] = false;
        }
        return hotel;
      })
    );
  }
  return allHotels;
}

export async function singleHotel(id, checkin, checkout) {
  const hotel = await hotelModel.findById(id);
  if (checkin && checkout) {
    const isFound = await findBookings(id, checkin, checkout);
    if (isFound) {
      hotel["isBooked"] = true;
    } else {
      hotel["isBooked"] = false;
    }
  }
  return hotel;
}

export async function getRatingForHotel(hotelId) {
  const ratings = await ratingModel.find({ hotelId });
  return ratings;
}
export async function getReviewsForHotel(hotelId) {
  const reviews = await reviewModel.find({ hotelId });
  return reviews;
}
async function findBookings(hotelId, checkin, checkout) {
  const matches = await bookingModel.find({
    hotelId
  });

  const found = matches.find((mathch) => {
    return (
      isDateInBetween(checkin, mathch.checkin, mathch.checkout) ||
      isDateInBetween(checkout, mathch.checkin, mathch.checkout)
    );
  });

  return found;
}

export async function getUserByEmail(email) {
  const users = await userModel.find({ email }).lean();
  return users[0];
}
export async function getBookingsByUserId(id) {
  const bookings = await bookingModel.find({ userId: id }).lean();
  return bookings;
}
