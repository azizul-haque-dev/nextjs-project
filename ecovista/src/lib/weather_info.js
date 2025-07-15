async function getWeatherData(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    return data?.weather?.[0]; // optional chaining for safety
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
    return null; // fallback return value if error occurs
  }
}
async function getWindData(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`Wind API error: ${response.status}`);
    }

    const data = await response.json();
    // optional chaining for safety
    return data?.wind;
  } catch (error) {
    console.error("Failed to fetch wind data:", error.message);
    // fallback return value if error occurs
    return null;
  }
}
async function getTemperatureData(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`Temperature API error: ${response.status}`);
    }

    const data = await response.json();
    // optional chaining for safety
    return data?.main;
  } catch (error) {
    console.error("Failed to fetch Temperature data:", error.message);
    // fallback return value if error occurs
    return null;
  }
}
async function getAqiData(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`Temperature API error: ${response.status}`);
    }

    const data = await response.json();
    // optional chaining for safety
    return data?.list[0];
  } catch (error) {
    console.error("Failed to fetch Temperature data:", error.message);
    // fallback return value if error occurs
    return null;
  }
}

export { getAqiData, getTemperatureData, getWeatherData, getWindData };
