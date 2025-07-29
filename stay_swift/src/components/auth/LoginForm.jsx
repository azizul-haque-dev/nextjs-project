"use client";

import { login } from "@/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  async function onSubmit(formdata) {
    try {
      const response = await login(formdata);

      if (response?.error) {
        setError(response.error);
        return;
      }

      router.push("/bookings");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      {error && (
        <div className="text-red-500 text-2xl font-semibold">{error}</div>
      )}
      <form className="login-form" action={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
