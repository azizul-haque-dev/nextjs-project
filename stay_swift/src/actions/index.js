"use server";

import { signIn } from "@/auth";

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
