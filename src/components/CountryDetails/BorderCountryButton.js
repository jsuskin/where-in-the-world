import { useState, useEffect } from "react";
import axios from "axios";

const BorderCountryButton = ({ countryCode, setSelectedCountry }) => {
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    async function setData() {
      await axios
        .get(`https://restcountries.com/v2/alpha/${countryCode}`)
        .then(({ data }) => setCountryName(data.name));
    }

    setData();
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
