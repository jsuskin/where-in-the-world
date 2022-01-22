import Country from './Country';
import './styles/Countries.css';

const Countries = ({ countries, setSelectedCountry }) => {
  return (
    <ul className='countries'>
      {countries.map((country) => (
        <Country
          key={+country.ccn3 || +country.numericCode}
          country={country}
          setSelectedCountry={setSelectedCountry}
        />
      ))}
    </ul>
  );
}

export default Countries
