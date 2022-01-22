import { useState, useEffect } from "react";
import axios from "axios";

const BorderCountryButton = ({ countryCode, setSelectedCountry }) => {
  const [countryName, setCountryName] = useState("");

  useEffect(async () => {
    const { data } = await axios.get(
      `https://restcountries.com/v2/alpha/${countryCode}`
    );

    setCountryName(data.name);
  }, [countryCode]);

  return (
    <div className='border-country-button-container'>
      <button
        className='border-country-button'
        onClick={() => setSelectedCountry(countryCode)}
      >
        {countryName}
      </button>
    </div>
  );
};

export default BorderCountryButton;
