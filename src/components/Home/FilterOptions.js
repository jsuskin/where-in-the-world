import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles/FilterOptions.css";

const FilterOptions = ({
  searchTerm,
  setSearchTerm,
  setFilterRegion,
  filterRegion,
}) => {
  return (
    <div className='filter-options'>
      <div>
        <div className='search-icon-container'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
        </div>
        <input
          type='text'
          placeholder='Search for a country...'
          value={searchTerm}
          onChange={(e) => {
            setFilterRegion("");
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <select
        value={filterRegion.length ? filterRegion : "default"}
        onChange={(e) => {
          setSearchTerm("");
          setFilterRegion(e.target.value);
        }}
      >
        <option value='default' disabled hidden>
          Filter by Region
        </option>
        {["Africa", "Americas", "Antarctic", "Asia", "Europe", "Oceania"].map(
          (region) => (
            <option key={region} value={region}>
              {region}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default FilterOptions;
