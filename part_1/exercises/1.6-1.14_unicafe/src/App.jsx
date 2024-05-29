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
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad

  if (all > 0) {
    return (

      <div>
        <div>
          <span>good </span>
          <span>{good}</span>
        </div>
        <div>
          <span>neutral </span>
          <span>{neutral}</span>
        </div>
        <div>
          <span>bad </span>
          <span>{bad}</span>
        </div>
        <div>
          <span>all </span>
          <span>{good + neutral + bad}</span>
        </div>
        <div>
          <span>average </span>
          <span>{all / 3}</span >
        </div>
        <div>
          <span>positive </span>
          <span>{good / all * 100}%</span>
        </div>
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





export default App