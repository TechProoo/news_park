const API_KEY = "8ea4b74dcb452a658eba232ce19e9f01";
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast"


export const fetchWeather = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?lat=6.5244&lon=3.3792&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null; 
  }
};
