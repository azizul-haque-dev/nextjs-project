import { bookingModel } from "@/models/bookings.models";
import { connectDb } from "@/service/connectDb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { hotelId, userId, checkin, checkout } = await req.json();

  await connectDb();
  const payload = {
    hotelId: new mongoose.Types.ObjectId(hotelId),
    userId: new mongoose.Types.ObjectId(userId),
    checkin,
    checkout
  };
  console.log(payload);

  try {
    await bookingModel.create(payload);
    return NextResponse.json({
      success: true,
      message: "Booking successfully created"
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: "Something went wrong"
    });
  }
};
