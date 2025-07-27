import { hotelModel } from "@/models/hotels-model";

export async function getAllHotels() {
  const hotels = await hotelModel.find().lean();
  return hotels;
}
