import React from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

const WeatherInfo = ({ weather }) => {
  const getWeatherIcon = (description) => {
    switch (description) {
      case "clear sky":
        return <WiDaySunny size={72} />;
      case "few clouds":
      case "scattered clouds":
      case "broken clouds":
        return <WiCloud size={72} />;
      case "shower rain":
      case "rain":
        return <WiRain size={72} />;
      case "thunderstorm":
        return <WiThunderstorm size={72} />;
      case "snow":
        return <WiSnow size={72} />;
      default:
        return <WiCloud size={72} />;
    }
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <h3 className="text-xl font-semibold text-center">{weather.name}</h3>
      <div className="flex justify-center items-center">
        {getWeatherIcon(weather.weather[0].description)}
        <p className="text-2xl capitalize font-semibold ml-2">
          {weather.weather[0].description}
        </p>
      </div>
      <div className="w-full lg:w-8/12 mx-auto grid grid-cols-2 justify-between gap-3 mb-3 mt-5">
        <p className="text-lg">Temperature</p>
        <p className="text-lg text-end">{weather.main.temp}°C</p>
      </div>
      <div className="w-full lg:w-8/12 mx-auto grid grid-cols-2 justify-between gap-3 mb-3">
        <p className="text-lg">Humidity</p>
        <p className="text-lg text-end">{weather.main.humidity}%</p>
      </div>
      <div className="w-full lg:w-8/12 mx-auto grid grid-cols-2 justify-between gap-3 mb-3">
        <p className="text-lg">Wind Speed</p>
        <p className="text-lg text-end">{weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
