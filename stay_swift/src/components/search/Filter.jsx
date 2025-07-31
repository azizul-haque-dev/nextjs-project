import { Suspense } from "react";
import FilterByStarCategory from "./filterby/FilterByStarCategory";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <div>
          <h3 className="font-bold text-lg">Sort By</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label htmlFor="highToLow">
              <input type="checkbox" name="highToLow" id="highToLow" />
              Price High to Low
            </label>

            <label htmlFor="lowToHigh">
              <input type="checkbox" name="lowToHigh" id="lowToHigh" />
              Price Low to high
            </label>
          </form>
        </div>

        <div>
          <h3 className="font-bold text-lg">Price Range</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label htmlFor="range1">
              <input type="checkbox" name="range1" id="range1" />$ 13 - $ 30
            </label>

            <label htmlFor="range2">
              <input type="checkbox" name="range2" id="range2" />$ 30 - $ 60
            </label>

            <label htmlFor="range3">
              <input type="checkbox" name="range3" id="range3" />$ 60 - $ 97
            </label>

            <label htmlFor="range3">
              <input type="checkbox" name="range3" id="range3" />$ 97 - $ 152
            </label>

            <label htmlFor="range4">
              <input type="checkbox" name="range4" id="range4" />$ 152 - $ 182
            </label>

            <label htmlFor="range5">
              <input type="checkbox" name="range5" id="range5" />$ 182+
            </label>
          </form>
        </div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <FilterByStarCategory />
        </Suspense>

        <div>
          <h3 className="font-bold text-lg">Amenities</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label htmlFor="wifi">
              <input type="checkbox" name="wifi" id="wifi" />
              Wi-fi
            </label>

            <label htmlFor="swimmingPool">
              <input type="checkbox" name="swimmingPool" id="swimmingPool" />
              Swimming Pool
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;
