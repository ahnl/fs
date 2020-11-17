import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value} {(props.unit ? props.unit : '')}
    </div>
  )
};
const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad > 0) {
    return (
      <>
        <h1>statistics</h1>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="average" value={(good + neutral + bad) / 3} />
        <StatisticLine text="positive" value={((good) / (good + neutral + bad) * 100)} unit="%" />
      </>
    );
  } else {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given.</p>
      </>
    );
  }

}

const Button = (props) => {
  return (
    <button onClick={() => props.set(props.val + 1)}>
      {props.text}
    </button>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" val={good} set={setGood} />
      <Button text="neutral" val={neutral} set={setNeutral} />
      <Button text="bad" val={bad} set={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)