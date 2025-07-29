import { userModel } from "@/models/users.model";
import { connectDb } from "@/service/connectDb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { fname, lname, email, password } = await req.json();

    await connectDb();

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists", success: false },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name: `${fname} ${lname}`,
      email,
      password: hashedPassword
    };

    await userModel.create(newUser);

    return NextResponse.json(
      { message: "User has been created successfully", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Failed to register this user", success: false },
      { status: 500 }
    );
  }
}
