import Image from "next/image";
import Card from "./Card";

import WindIcon from "@/assets/icon_wind.png";
import { getWindData } from "@/lib/weather-info";
const WindComponent = async ({ lat, lon }) => {
  const data = await getWindData(lat, lon);

  if (!data) {
    <p>No wind data available</p>;
  }
  const { speed, deg } = data;

  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src={WindIcon}
          alt="rain icon"
          width={80}
          height={80}
        />
        <h3 className="feature-title">{speed} meter/sec</h3>
        <span className="feature-name">{deg} degrees</span>
      </div>
    </Card>
  );
};

export default WindComponent;
