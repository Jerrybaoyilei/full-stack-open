import { useEffect, useState } from 'react'
import FindCountries from './components/findCountries'
import ShowCountries from './components/showCountries'
import countryService from './services/countries'
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

  const handleSearchKey = (event) => {
    setSearchKey(event.target.value)
  }

  const handleShowCountry = ({ country }) => {
    setSearchKey(country)
  }

  return (
    <div>
      <FindCountries searchKey={searchKey} handleSearchKey={handleSearchKey} />
      <div>
        <ShowCountries searchKey={searchKey} countries={countries} handleShowCountry={handleShowCountry} />
      </div>
    </div>
  )
}

export default App
