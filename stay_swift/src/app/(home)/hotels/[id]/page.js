import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { singleHotel } from "@/queryes";

const HotelDetailsPage = async ({ params: { id } }) => {
  const hotelInfo = await singleHotel(id);
  console.log(hotelInfo.shortDescription);
  return (
    <>
      <Summary hotelInfo={hotelInfo} />
      <Gallery gallery={hotelInfo?.gallery} />
      <Overview overview={hotelInfo?.overview} />
    </>
  );
};

export default HotelDetailsPage;
