import { useEffect, useState } from 'react'
import Countries from './components/showCountries'
import countryService from './services/countries'
import axios from 'axios'
import './App.css'

function App() {

  const [countries, setCountries] = useState([])
  const [searchKey, setSearchKey] = useState('')


  useEffect(() => {
    countryService
      .getAll()
      .then(response => {
        setCountries(response)
      })
  }, [])

  useEffect(() => {
    console.log(countries)
    console.log(countries.map(country => country.name.common))
  }, [countries])

  const FilterCountries = ({ searchKey }) => {
    if (!searchKey) {
      return null
    }
    const matchedCountries = countries.filter(country => {
      const countryName = country.name.common
      if (countryName) {
        return countryName.includes(searchKey)
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
        return (
          matchedCountries.map(country =>
            <div key={country.name.common}>
              {country.name.common}
            </div>
          )
        )
      } else {
        const matchedCountry = matchedCountries[0]
        if (matchedCountry) {
          return (
            <div>
              <h1>{matchedCountry.name.common}</h1>
              <div>capital {matchedCountry.capital ? matchedCountry.capital[0] : ''}</div>
              <div>area {matchedCountry.area}</div>
              <h4>languages:</h4>
              <ul>
                {Object.values(matchedCountry.languages)
                  .map(language => <li key={language}>{language}</li>)}
              </ul>
              {matchedCountry.flags.png
                ? <img src={matchedCountry.flags.png} alt={`flag of ${matchedCountry.name.common}`} />
                : matchedCountry.flags.svg
                  ? <img src={matchedCountry.flags.svg} alt={`flag of ${matchedCountry.name.common}`} />
                  : <p>No flag available</p>
              }
            </div>
          )
        }

      }
    }

  }

  const handleSearchKey = (event) => {
    setSearchKey(event.target.value)
  }

  return (
    <div>
      <div>
        find countries <input value={searchKey} onChange={handleSearchKey} />
      </div>
      <div>
        <FilterCountries searchKey={searchKey} />

      </div>
    </div>
  )




}

export default App
