const ShowWeather = ({ temperature, wind, image }) => {

  return (
    <div>
      <div>
        temperature: {temperature} &deg;C
        <img src={image} alt="Weather icon for the capital city" />
      </div>
      <div>
        wind: {wind} m/s
      </div>
    </div>
  )
}

export default ShowWeather