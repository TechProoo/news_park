import { Wind, Droplet, SunDim, Sun, CloudRain } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchWeather } from "../Weather/FetchWeather";
import { motion } from "framer-motion";


const Weather = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather();
        if (!data) {
          console.error("Weather data is null or undefined");
          return;
        }
        setWeatherData(data);
      } catch (err) {
        console.log("Error fetching weather:", err);
      }
    };
    getWeather();
  }, []);
  
  if (!weatherData) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <Sun size={50} className="text-yellow-400 drop-shadow-lg" />
        </motion.div>
  
        <p className="mt-4 text-white text-lg font-semibold">Fetching Weather...</p>
  
        <div className="flex gap-4 mt-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
          >
            <CloudRain size={30} className="text-blue-300" />
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
          >
            <Wind size={30} className="text-gray-300" />
          </motion.div>
        </div>
      </div>
    );
  }
  

  // Extract necessary data
  const currentTemp = Math.round(weatherData.list[0]?.main.temp - 273.15); // Convert from Kelvin to Celsius
  const windSpeed = weatherData.list[0]?.wind.speed || "N/A";
  const humidity = weatherData.list[0]?.main.humidity || "N/A";
  const uvIndex = 6; 

  // Get hourly forecast (next 6 hours)
  const hourlyForecast = weatherData.list.slice(0, 6);

  return (
    <div className="weather_cover pt-4 rounded-xl px-3">
      <div className="weather_gradient p-4 rounded-xl">
        <div className="weather_location">
          <p className="text-white font-bold">Lagos, Nigeria</p>
        </div>

        <div className="weather_temp text-white text-center mt-4">
          <h1 className="text-4xl font-bold">{currentTemp}°C</h1>
          <small>Expect high rain today</small>
        </div>

        <div className="weather_details flex justify-between mt-4">
          <div className="weather_detail_item flex items-center gap-2">
            <Wind size={20} className="text-white" />
            <span>{windSpeed} km/hr</span>
          </div>
          <div className="weather_detail_item flex items-center gap-2">
            <Droplet size={20} className="text-white" />
            <span>{humidity}%</span>
          </div>
          <div className="weather_detail_item flex items-center gap-2">
            <SunDim size={20} className="text-white" />
            <span>UV Index: {uvIndex}</span>
          </div>
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="weather_hourly mt-6">
        <div className="flex items-center gap-1 text-white">
          <Sun size={15} />
          <small className="font-bold">Hourly Forecast</small>
        </div>
        <div className="flex gap-2 overflow-x-auto mt-3 weather_hourly_inner">
          {hourlyForecast.map((hour: number, index:number) => (
            <div
              key={index}
              className="hourly_bg rounded-md p-2 text-center flex flex-col items-center bg-gray-800/50 backdrop-blur-lg"
            >
              <div className="hourly_time">
                <h1 className="text-xs">{new Date(hour.dt * 1000).getHours()}:00</h1>
              </div>
              <div className="hourly_degree text-white font-bold">
                {Math.round(hour.main.temp - 273.15)}°
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
