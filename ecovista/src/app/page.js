import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <LocationDetector />
    </Suspense>
  );
}
