"use server";

import { signIn } from "@/auth";
import { bookingModel } from "@/models/bookings.models";
import { connectDb } from "@/service/connectDb";
import mongoose from "mongoose";
import { redirect } from "next/navigation";

export async function login(formdata) {
  try {
    const user = await signIn("credentials", {
      email: formdata.get("email"),
      password: formdata.get("password"),
      redirect: false
    });
    return user;
  } catch (error) {
    console.log("error: login server action", error);
    return { error: "Authentication failed" };
  }
}

export async function submitBooking(formData) {
  const hotelId = formData.get("hotelId");
  const userId = formData.get("userId");
  const checkin = formData.get("checkin");
  const checkout = formData.get("checkout");

  await connectDb();

  const payload = {
    hotelId: new mongoose.Types.ObjectId(hotelId),
    userId: new mongoose.Types.ObjectId(userId),
    checkin,
    checkout
  };

  await bookingModel.create(payload);
  redirect("/bookings");
}
