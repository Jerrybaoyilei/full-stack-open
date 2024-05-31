const ShowCountriesList = ({ matchedCountries, handleShowCountry }) => {
  return (
    matchedCountries.map(country =>
      <div key={country.name.common}>
        {country.name.common} <button onClick={() => handleShowCountry({ country: country.name.common })}>Show</button>
      </div>
    )
  )
}

export default ShowCountriesList