import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

const Button = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <div>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad
  const average = all / 3
  const positive = good / all
  const positivePercentage = positive.toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 3 })

  if (all > 0) {
    return (

      <div>
        <StatisticLine text="good" value={good}></StatisticLine>
        <StatisticLine text="nenutral" value={neutral}></StatisticLine>
        <StatisticLine text="bad" value={bad}></StatisticLine>
        <StatisticLine text="all" value={all}></StatisticLine>
        <StatisticLine text="average" value={average}></StatisticLine>
        <StatisticLine text="positive" value={positivePercentage}></StatisticLine>

      </div>
    )
  } else {
    return (
      <div>
        No feedback given
      </div>
    )
  }
}

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <span>{text} </span>
      <span>{value}</span>
    </div>
  )
}





export default App