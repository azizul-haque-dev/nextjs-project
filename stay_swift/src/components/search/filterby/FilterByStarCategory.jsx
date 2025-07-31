"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function FilterByStarCategory() {
  const [query, setQuery] = useState([]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initializing state from URL
  useEffect(() => {
    const starParams = searchParams.get("category");

    if (starParams) {
      const decodedStars = decodeURI(starParams);
      const starsFromUrl = decodedStars.split("|");
      setQuery(starsFromUrl);
    }
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;

    let newQuery = [];

    if (checked) {
      newQuery = [...query, name];
    } else {
      newQuery = query.filter((item) => item !== name);
    }

    setQuery(newQuery);

    const params = new URLSearchParams(searchParams);

    if (newQuery.length > 0) {
      params.set("category", newQuery.join("|"));
    } else {
      params.delete("category");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };
  console.log({ query });

  return (
    <div>
      <h3 className="font-bold text-lg">category Category</h3>
      <form className="flex flex-col gap-2 mt-2">
        {["5", "4", "3", "2", "1"].map((category) => (
          <label key={category} htmlFor={`${category}category`}>
            <input
              type="checkbox"
              name={category}
              id={`${category}category`}
              checked={query.includes(category)}
              onChange={handleChange}
            />
            {category} star
          </label>
        ))}
      </form>
    </div>
  );
}

export default FilterByStarCategory;
