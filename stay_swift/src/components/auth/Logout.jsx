"use client";

import { signOut } from "next-auth/react";

function Logout() {
  return (
    <button
      className="ml-1"
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
    >
      {" "}
      Sign Out
    </button>
  );
}

export default Logout;
