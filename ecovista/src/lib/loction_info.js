// 1️⃣ Get detailed reverse geolocation data by lat/lon
async function getLocationData(lat, lon) {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );

    if (!response.ok) {
      throw new Error(`Reverse Geocode API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch location data:", error.message);
    return null;
  }
}

// 2️⃣ Get list of predefined locations (from your API route)
async function getLocationLatLongList() {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch location list:", error.message);
    return null;
  }
}

// 3️⃣ Get a single location’s lat/lon using its name
async function getLocationLatLong(locationName) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch lat/lon by location name:", error.message);
    return null;
  }
}

export { getLocationData, getLocationLatLong, getLocationLatLongList };
