const ShowSingleCountry = ({ matchedCountry }) => {
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

export default ShowSingleCountry