import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Tulis Nama Kota"
            className="py-3 px-4 rounded-xl border-2 border-gray-300 focus:border-blue-700 outline-none"
          />
          <button
            type="submit"
            className="py-3 px-7 bg-blue-700 text-white font-semibold rounded-xl"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
