import React from 'react'
import ReactDOM from 'react-dom'
const course = 'Half Stack application development'

const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
}
const part2 = {
  name: 'Using props to pass data',
  exercises: 7
}
const part3 = {
  name: 'State of a component',
  exercises: 14
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  )
}
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.amount}</p>
    </>
  )
}

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total amount={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))