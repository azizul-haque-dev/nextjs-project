import { getRatingForHotel } from "@/queryes";

async function HotelRating({ id }) {
  const ratings = await getRatingForHotel(id);
  const getRatingDetails = (avarageRating) => {
    switch (avarageRating) {
      case 1:
        return "Very bad";
      case 2:
        return "Bad";
      case 3:
        return "Avarage";
      case 4:
        return "Good";
      case 5:
        return "Excellent";
      default:
        return "No rating availabl";
    }
  };
  let avarageRating = 0;

  if (ratings.length > 0) {
    avarageRating = ratings.reduce((items, current) => {
      return (items += current.rating / ratings.length);
    }, 0);
  }

  return (
    <>
      <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
        {avarageRating}
      </div>
      <span className="font-medium">{getRatingDetails(avarageRating)}</span>
    </>
  );
}

export default HotelRating;
