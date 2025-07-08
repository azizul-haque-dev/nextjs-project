// components/NavbarClientWrapper.tsx
"use client";

import dynamic from "next/dynamic";

// Dynamically import Navbar with SSR disabled
const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

export default function NavbarClientWrapper() {
  return <Navbar />;
}
