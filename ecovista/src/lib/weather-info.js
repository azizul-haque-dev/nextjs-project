// Utility: Centralized fetch with error handling
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

// Environment-safe API key
const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;

// Weather condition (e.g., rain, clear, clouds, etc.)
export const getWeatherData = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const data = await safeFetch(url);
  return data?.weather?.[0] || {};
};

// Temperature details (temp, feels_like, min, max, etc.)
export const getTemperatureData = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const data = await safeFetch(url);
  return data?.main || {};
};

// Wind details (speed, deg, gust)
export const getWindData = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const data = await safeFetch(url);
  return data?.wind || {};
};

// Air Quality Index and pollutants
export const getAQIData = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const data = await safeFetch(url);
  return data?.list?.[0] || {};
};
