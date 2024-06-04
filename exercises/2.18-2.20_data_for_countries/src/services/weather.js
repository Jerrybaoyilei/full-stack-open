import axios from 'axios'

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?"

const getWeather = ({ lat, lon, apiKey }) => axios
  .get(`${baseUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)

// const getIcon = async ({ iconCode }) => {
//   try {
//     const response = await axios
//       .get(`${iconUrl}${iconCode}@2x.png`)
//     return response.data
//   } catch (error) {
//     return console.log(`Unable to get the weather icon. Error: ${error}`)
//   }
// }

export default { getWeather }