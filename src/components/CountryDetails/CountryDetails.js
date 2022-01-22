import { useState, useEffect } from "react";
import BorderCountryButton from "./BorderCountryButton";
import { formatPop, baseUrl, scrollToTop } from '../../utils/HelperFunctions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./styles/CountryDetails.css";

const CountryDetails = ({ countryCode, setSelectedCountry }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}v2/alpha/${countryCode}`)
      .then((res) => setCountry(res.data));
    scrollToTop();
  }, [countryCode]);

  return (
    <>
      {country && (
        <div>
          <div className='spacer'></div>
          <button className="back-button" onClick={() => setSelectedCountry(null)}>
            <FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back
          </button>
          <div className='country-details'>
            <div className='country-flag-image-container'>
              <img src={country.flags.svg} alt={`Official flag of ${country.name}`} />
            </div>
            <div className='country-info'>
              <div className='country-name'>
                <h1>{country.name}</h1>
              </div>
              <div className='country-metadata'>
                <p>
                  <span className='property-label'>Native Name:</span>{" "}
                  {country.nativeName}
                </p>
                <p>
                  <span className='property-label'>Population:</span>{" "}
                  {formatPop(country.population)}
                </p>
                <p>
                  <span className='property-label'>Region:</span>{" "}
                  {country.region}
                </p>
                <p>
                  <span className='property-label'>Subregion:</span>{" "}
                  {country.subregion}
                </p>
                <p>
                  <span className='property-label'>Capital:</span>{" "}
                  {country.capital || "n/a"}
                </p>
                <p>
                  <span className='property-label'>Top Level Domain:</span>{" "}
                  {country.topLevelDomain[0]}
                </p>
                <p>
                  <span className='property-label'>Currencies:</span>{" "}
                  {country.currencies
                    .map((obj) => `${obj.name} (${obj.symbol})`)
                    .join(", ")}
                </p>
                <p>
                  <span className='property-label'>Languages:</span>{" "}
                  {country.languages.map((obj) => obj.name).join(", ")}
                </p>
              </div>
              <div className='spacer'></div>
              <span className='border-countries'>
                <span className='property-label'>Border Countries:&nbsp;</span>{" "}
                {country.borders ? (
                  <div className='border-countries-buttons'>
                    {country.borders.map((bc) => (
                      <BorderCountryButton
                        key={bc}
                        countryCode={bc}
                        setSelectedCountry={setSelectedCountry}
                      />
                    ))}
                  </div>
                ) : (
                  " None"
                )}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetails;
