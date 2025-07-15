import Image from "next/image";
import BgImage from "../../public/background.png";

export default function RootLayout({
  children,
  aqi,
  temperature,
  weather,
  wind
}) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        className="bg-img"
        width={700}
        height={1200}
        alt="background image"
        src={BgImage}
      />
      <main class="!z-50 w-full">
        <div class="container">
          <div class="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}
