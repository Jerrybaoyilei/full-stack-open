import { useEffect, useState } from 'react'
import WeatherService from '../services/weather'
import ShowWeather from './showWeather'

const ShowSingleCountry = ({ matchedCountry }) => {

  const [weatherData, setWeatherData] = useState(null)



  useEffect(() => {
    const lat = matchedCountry.capitalInfo.latlng[0]
    const lon = matchedCountry.capitalInfo.latlng[1]
    const apiKey = "1fb542e629d8b34fc79e0e268c730b08"
    WeatherService
      .getWeather({ lat, lon, apiKey })
      .then(response => {
        console.log(response.data)
        setWeatherData(response.data)
      })
  }, [])

  if (!weatherData) {
    return null
  }

  const temperatureData = weatherData.main.temp
  const windData = weatherData.wind.speed

  const iconCode = weatherData.weather[0].icon
  const iconImg = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

  return (
    <div>
      <h1>{matchedCountry.name.common}</h1>
      <div>capital {matchedCountry.capital ? matchedCountry.capital[0] : ''}</div>
      <div>area {matchedCountry.area}</div>
      <h3>languages:</h3>
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
      <h2>Weather in {matchedCountry.capital}</h2>
      {weatherData ? (
        <ShowWeather temperature={temperatureData} wind={windData} image={iconImg} />
      ) : (
        <div>Loading weather data ...</div>)}
    </div>
  )
}

export default ShowSingleCountry