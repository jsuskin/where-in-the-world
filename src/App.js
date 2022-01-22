import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import FilterOptions from "./components/Home/FilterOptions";
import Countries from "./components/Home/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { baseUrl } from "./utils/HelperFunctions";
import axios from "axios";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filterRegion, setFilterRegion] = useState("");

  useEffect(() => {
    const url = searchTerm.length
      ? `${baseUrl}v2/name/${searchTerm}`
      : filterRegion.length
      ? `${baseUrl}v3.1/region/${filterRegion}`
      : `${baseUrl}v3.1/all`;

    axios.get(url).then(({ data }) => setCountries(data));
  }, [searchTerm, filterRegion]);

  return (
    <div className='app'>
      <Header
        reset={() => {
          setSelectedCountry(null);
          setSearchTerm("");
          setFilterRegion("");
        }}
      />
      <section className='content'>
        {!selectedCountry ? (
          <>
            <FilterOptions
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setFilterRegion={setFilterRegion}
              filterRegion={filterRegion}
            />
            {countries.length ? (
              <Countries
                countries={countries}
                setSelectedCountry={setSelectedCountry}
              />
            ) : (
              <></>
            )}
          </>
        ) : (
          <CountryDetails
            countryCode={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        )}
        <ScrollToTop />
      </section>
    </div>
  );
}

export default App;
