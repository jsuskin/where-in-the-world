import { formatPop } from "../../utils/HelperFunctions";

const Country = ({ country, setSelectedCountry }) => {
  return (
    <li className='country-card-container'>
      <div
        className='country-card'
        onClick={() => setSelectedCountry(country.cca3 || country.alpha3Code)}
      >
        <div className='country-card-flag-image-container'>
          <img
            className='country-card-flag-image'
            src={country.flags.png}
            alt={`Official flag of ${country.name.common || country.name}`}
          />
        </div>
        <div className='country-card-info'>
          <h3>{country.name.common || country.name}</h3>
          <p>Population: {formatPop(country.population)}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      </div>
    </li>
  );
};

export default Country;
