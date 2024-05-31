import ShowCountriesList from "./showCountriesList"
import ShowSingleCountry from "./showSingleCountry"

const ShowCountries = ({ searchKey, countries }) => {
  if (!searchKey) {
    return null
  }
  const matchedCountries = countries.filter(country => {
    const countryName = country.name.common.toLowerCase()
    if (countryName) {
      return countryName.includes(searchKey.toLowerCase())
    }
  })
  if (matchedCountries) {
    if (matchedCountries.length > 10) {
      return (
        <div>
          Too many matches, specify another filter
        </div>
      )
    } else if (matchedCountries.length > 1) {
      return <ShowCountriesList matchedCountries={matchedCountries} />
    } else {
      const matchedCountry = matchedCountries[0]
      if (matchedCountry) {
        return <ShowSingleCountry matchedCountry={matchedCountry} />
      }
    }
  }
}

export default ShowCountries