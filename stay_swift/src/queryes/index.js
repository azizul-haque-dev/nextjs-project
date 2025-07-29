import { hotelModel } from "@/models/hotels-model";
import { ratingModel } from "@/models/ratings.model";
import { reviewModel } from "@/models/reviews.model";

export async function getAllHotels() {
  const hotels = await hotelModel
    .find()
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
  return hotels;
}

export async function singleHotel(id) {
  const hotel = await hotelModel.findById(id);
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
