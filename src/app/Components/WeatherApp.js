"use client";

import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const fetchWeather = async (city) => {
    const apiKey = "5f0d0edeb23c83bc7785a29cdeb3f9ab";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    setWeather(response.data);
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-blue-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-white text-3xl font-bold mb-4">Weather App</h1>

      <SearchBar onSearch={fetchWeather} />
      {weather && (
        <div class="w-full lg:w-6/12">
          <WeatherInfo weather={weather} />
          <div className="mt-5 flex justify-center">
            <button
              className="py-2 px-5 rounded-xl bg-gray-200 text-700"
              onClick={refresh}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
