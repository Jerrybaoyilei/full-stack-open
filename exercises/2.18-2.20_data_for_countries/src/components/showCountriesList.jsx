const ShowCountriesList = ({ matchedCountries }) => {
  return (
    matchedCountries.map(country =>
      <div key={country.name.common}>
        {country.name.common}
      </div>
    )
  )
}

export default ShowCountriesList