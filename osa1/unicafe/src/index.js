import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad > 0) {
    return (
      <>
        <h1>statistics</h1>
        <div>
          good {good}
        </div>
        <div>
          neutral {neutral}
        </div>
        <div>
          bad {bad}
        </div>
        <div>
          total {good + neutral + bad}
        </div>
        <div>
          average {(good + neutral + bad) / 3}
        </div>
        <div>
          positive {((good) / (good + neutral + bad) * 100)}%
        </div>
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

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)