// Utility function for safe fetch with error handling
const safeFetch = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (e) {
    console.error(`Fetch failed for ${url}: ${e.message}`);
    return null;
  }
};

// Get location details (like city, country, etc.) based on latitude and longitude
export const getLocationData = async (lat, lon) => {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`;
  return await safeFetch(url);
};

// Get the full list of saved locations with their lat/lon from your backend
export const getLocationLatLongList = async () => {
  const url = `http://localhost:3000/api/location`;
  return await safeFetch(url);
};

// Get lat/lon for a specific location name (e.g., "Makkah") from your backend
export const getLocationLatLong = async (locationName) => {
  const url = `http://localhost:3000/api/location/${locationName}`;
  return await safeFetch(url);
};

// Resolve coordinates: use provided lat/lon or resolve from location name if missing
export const getResolvedLatLong = async (location, lat, lon) => {
  console.log("Resolving coordinates for:", location, lat, lon);

  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatlong = await getLocationLatLong(location);
  console.log("Fetched from DB/API:", locationLatlong);

  if (locationLatlong?.latitude && locationLatlong?.longitude) {
    return {
      lat: locationLatlong.latitude,
      lon: locationLatlong.longitude
    };
  }

  // Fallback if unable to resolve
  console.warn(`Could not resolve coordinates for: ${location}`);
  return null;
};
